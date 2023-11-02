package pl.ramteam.classplanner.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.ramteam.classplanner.model.GroupMember;

public interface GroupMemberRepository extends JpaRepository<GroupMember, Integer> {
}
