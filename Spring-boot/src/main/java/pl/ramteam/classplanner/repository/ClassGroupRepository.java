package pl.ramteam.classplanner.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pl.ramteam.classplanner.model.ClassGroup;
import pl.ramteam.classplanner.model.Member;

import java.util.List;

@Repository
public interface ClassGroupRepository extends JpaRepository<ClassGroup, Integer> {

    @Query("SELECT m FROM ClassGroup cg " +
            "JOIN cg.groupMembers gm " +
            "JOIN Member m ON gm.memberId = m.id " +
            "WHERE cg.id = :groupId")
    List<Member> FindAllClassGroups(@Param("groupId") int groupId);

}

