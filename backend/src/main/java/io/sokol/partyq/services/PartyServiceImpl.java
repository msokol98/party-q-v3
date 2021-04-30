package io.sokol.partyq.services;

import io.sokol.partyq.entities.Member;
import io.sokol.partyq.entities.Party;
import io.sokol.partyq.exceptions.AlreadyInPartyException;
import io.sokol.partyq.helpers.GeneratePartyAccessCode;
import io.sokol.partyq.repositories.MemberRepository;
import io.sokol.partyq.repositories.PartyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service("partyService")
public class PartyServiceImpl implements IPartyService {

    @Autowired
    private PartyRepository partyRepository;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private GeneratePartyAccessCode generatePartyAccessCode;

    @Override
    public Party create(Member member) {
        if(member.getParty() != null) {
            throw new AlreadyInPartyException();
        }

        Party party = new Party();

        party.setAccessCode(generatePartyAccessCode.get());
        party.addMember(member);

        partyRepository.save(party);

        member.setParty(party);
        member.setHost(true);
        memberRepository.save(member);

        return party;
    }

    @Override
    public Optional<Party> findByAccessCode(String accessCode) {
        return partyRepository.findByAccessCode(accessCode);
    }

    @Override
    public void addMember(long partyId, Member member) {
        if(member.getParty() != null) {
            throw new AlreadyInPartyException();
        }

        Party party = findById(partyId);

        party.addMember(member);
        member.setParty(party);

        partyRepository.save(party);
        memberRepository.save(member);
    }

    @Override
    public void removeMember(long partyId, Member member) {
        if(member.getParty() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Member is not currently in a party");
        }

        Party party = findById(partyId);

        if(member.isHost()) {
            party.getMembers().forEach(m -> {
                m.setParty(null);
                memberRepository.save(m);
            });
            partyRepository.delete(party);
        } else {
            party.removeMember(member);
            partyRepository.save(party);
        }

        member.setParty(null);
        memberRepository.save(member);
    }

    private Party findById(long id) {
        Optional<Party> party = partyRepository.findById(id);
        party.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        return party.get();
    }
}
