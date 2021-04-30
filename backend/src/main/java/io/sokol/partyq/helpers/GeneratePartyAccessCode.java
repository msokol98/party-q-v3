package io.sokol.partyq.helpers;

import io.sokol.partyq.repositories.PartyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Random;
import java.util.function.Supplier;

@Service
public class GeneratePartyAccessCode implements Supplier<String> {

    @Autowired
    private PartyRepository partyRepository;

    @Override
    public String get() {
        return createCode();
    }

    private String createCode() {
        String entryCode;
        Random r = new Random();

        do {
            int number = r.nextInt(999999);
            entryCode = String.format("%06d", number);
        }
        while(isDuplicateCode(entryCode));

        return entryCode;
    }

    private boolean isDuplicateCode(String code) {
        return partyRepository
                .findAll()
                .stream()
                .anyMatch(party -> party.getAccessCode().equals(code));
    }
}
