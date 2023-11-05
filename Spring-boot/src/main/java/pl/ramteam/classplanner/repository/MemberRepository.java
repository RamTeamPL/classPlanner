package pl.ramteam.classplanner.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pl.ramteam.classplanner.model.Announcement;
import pl.ramteam.classplanner.model.Member;

import java.util.List;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {


  @Query("Select a FROM Announcement a "+
  "Join GroupMember gm ON a.groupId = gm.groupId " +
  "JOIN Member m ON gm.memberId = m.id " +
  "Where m.id = :memberId Order by created desc")
  List<Announcement> FindAnnouncementsByMemberId(@Param("memberId") int memberId);

  @Query("Select a FROM Announcement a "+
    "Join GroupMember gm ON a.groupId = gm.groupId " +
    "JOIN Member m ON gm.memberId = m.id " +
    "Where m.id = :memberId Order by created desc limit 1")
  Announcement FindLastAnnouncementsByMemberId(@Param("memberId") int memberId);


  @Query("SELECT DISTINCT m FROM Member m " +
    "JOIN GroupMember gm ON m.id = gm.memberId " +
    "JOIN ClassGroup cg ON gm.groupId = cg.id " +
    "WHERE gm.roleId IN (1, 2, 3) " +
    "AND gm.groupId = (SELECT gm2.groupId FROM GroupMember gm2 WHERE gm2.memberId = :memberId)")
  List<Member> findStudentCouncilByMemberId(int memberId);
}
