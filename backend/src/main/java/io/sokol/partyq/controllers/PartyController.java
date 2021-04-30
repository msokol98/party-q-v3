package io.sokol.partyq.controllers;

import io.sokol.partyq.entities.Member;
import io.sokol.partyq.entities.Party;
import io.sokol.partyq.helpers.GetMemberFromAuthHeader;
import io.sokol.partyq.services.IPartyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.net.URI;
import java.util.Optional;

@RepositoryRestController
public class PartyController {

    @Autowired
    private GetMemberFromAuthHeader getMemberFromAuthHeader;

    @Autowired
    private IPartyService partyService;

    @GetMapping("parties")
    public ResponseEntity<?> retrieve(@RequestHeader("Authorization") String authHeader,
                                      @RequestParam(required=false) String accessCode) {
        Member member = getMemberFromAuthHeader.apply(authHeader);

        Optional<Party> optionalParty =
                accessCode != null ?
                        partyService.findByAccessCode(accessCode)
                        : Optional.ofNullable(member.getParty());

        Party party = optionalParty.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        return ResponseEntity.ok().body(party);
    }

    @PostMapping("parties")
    public ResponseEntity<?> create(@RequestHeader("Authorization") String authHeader) {
        Member member = getMemberFromAuthHeader.apply(authHeader);
        Party party = partyService.create(member);
        return ResponseEntity.created(URI.create("/parties/" + party.getId())).body(party);
    }

    @PatchMapping("parties/{id}/members")
    public ResponseEntity<?> patchMembers(@RequestHeader("Authorization") String authHeader,
                                           @RequestParam boolean adding,
                                           @PathVariable("id") long partyId) {;
        Member member = getMemberFromAuthHeader.apply(authHeader);

        if(adding) {
            partyService.addMember(partyId, member);
        } else {
            partyService.removeMember(partyId, member);
        }

        return ResponseEntity.noContent().build();
    }
}
