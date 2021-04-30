package io.sokol.partyq.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
@Data
public class Member {

    @Id
    private String id;

    private String name;
    private String token;
    private boolean isHost = false;

    @ManyToOne
    @JsonIgnore
    private Party party;

    public boolean getInParty() {
        return party != null;
    }

}
