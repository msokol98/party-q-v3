package io.sokol.partyq.helpers;

import io.sokol.partyq.entities.Member;
import io.sokol.partyq.repositories.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;
import java.util.function.Function;

@Service
public class GetMemberFromAuthHeader implements Function<String, Member> {

    @Autowired
    private MemberRepository memberRepository;

    @Override
    public Member apply(String authHeader) {
        String token = getToken(authHeader);
        Optional<Member> member = memberRepository.findByToken(token);
        return member.orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED));
    }

    private String getToken(String authHeader) {
        return authHeader.substring(7);
    }
}
