package io.sokol.partyq.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.List;
import java.util.Optional;

@Entity
@Data
public class Party {

    @Id
    @GeneratedValue
    private long id;

    @Column(length = 6)
    private String accessCode;

    @OneToMany
    private List<Member> members;

    @OneToMany
    private List<Song> queue;

    private int currentSongIndex;

    private List<Member> getMembers() {
        return members;
    }

    private void addMember(Member member) {
        members.add(member);
    }

    private List<Song> getQueue() {
        return queue;
    }

    private void addSong(Song song) {
        queue.add(song);
    }

    public Optional<Member> getHost() {
        return getMembers().stream().filter(Member::isHost).findAny();
    }

}
