package io.sokol.partyq.repositories;

import io.sokol.partyq.entities.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, String> {}
