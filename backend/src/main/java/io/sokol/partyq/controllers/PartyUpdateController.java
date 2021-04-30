package io.sokol.partyq.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class PartyUpdateController {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/party-update/{partyId}")
    public void sendPartyUpdate(@DestinationVariable String partyId, String partyUpdate) {
        System.out.println("handling party update: " + partyUpdate + " for the party with id: " + partyId);
        simpMessagingTemplate.convertAndSend("/topic/party-updates/" + partyId, partyUpdate + " LOL");
    }

}
