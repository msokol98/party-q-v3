package io.sokol.partyq.controllers;

import io.sokol.partyq.entities.Member;
import io.sokol.partyq.helpers.GetMemberFromAuthHeader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {

    @Autowired
    private GetMemberFromAuthHeader getMemberFromAuthHeader;

    @GetMapping("/auth/users/me")
    public ResponseEntity<?> currentUser(@RequestHeader("Authorization") String authHeader) {
        Member member = getMemberFromAuthHeader.apply(authHeader);
        return ResponseEntity.ok().body(member);
    }
}
