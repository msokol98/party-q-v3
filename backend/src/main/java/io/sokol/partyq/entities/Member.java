package io.sokol.partyq.entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Member {

    @Id
    private String id;
    private String token;
    private boolean isHost = false;

}
