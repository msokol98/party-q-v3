package io.sokol.partyq.repositories;

import io.sokol.partyq.entities.Song;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SongRepository extends JpaRepository<Song, Long> {}
