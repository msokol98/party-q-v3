package io.sokol.partyq.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class AlreadyInPartyException extends ResponseStatusException {

    public AlreadyInPartyException() {
        super(HttpStatus.BAD_REQUEST, "User is already in a party.");
    }
}
