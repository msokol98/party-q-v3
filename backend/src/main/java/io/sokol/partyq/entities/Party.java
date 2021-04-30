package io.sokol.partyq.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
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
    private List<Member> members = new ArrayList<>();

    @OneToMany
    private List<Song> queue = new ArrayList<>();

    private int currentSongIndex;

    public List<Member> getMembers() {
        return members;
    }

    public void addMember(Member member) {
        members.add(member);
    }

    public void removeMember(Member member) { members.remove(member); }

    public List<Song> getQueue() {
        return queue;
    }

    public void addSong(Song song) {
        queue.add(song);
    }

    public Optional<Member> getHost() {
        return getMembers().stream().filter(Member::isHost).findAny();
    }

}
