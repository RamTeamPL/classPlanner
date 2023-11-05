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



    /*@Query("SELECT a FROM Announcement a" +
      "JOIN GroupMember gm ON a.groupId = gm.groupId" +
      "JOIN Member m ON gm.memberId = m.id" +
      "WHERE m.id = :memberId")
    List<Announcement> FindAnnouncementsByMemberId(@Param("memberId") int memberId);*/

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
}
