package io.sokol.partyq.services;

import io.sokol.partyq.entities.Member;
import io.sokol.partyq.entities.Party;

import java.util.Optional;

public interface IPartyService {
    Party create(Member member);
    Optional<Party> findByAccessCode(String accessCode);
    void addMember(long partyId, Member member);
    void removeMember(long partyId, Member member);
}
