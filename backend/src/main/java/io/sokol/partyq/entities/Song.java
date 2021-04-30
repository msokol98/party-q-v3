package io.sokol.partyq.entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
@Data
public class Song {

    @Id
    @GeneratedValue
    private long id;

    private long spotifyId;

    private int index;

    @ManyToOne
    private Member selector;

}
