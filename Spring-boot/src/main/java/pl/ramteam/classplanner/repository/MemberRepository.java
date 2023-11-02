package pl.ramteam.classplanner.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.ramteam.classplanner.model.Member;
@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {
}
