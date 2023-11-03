package pl.ramteam.classplanner.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pl.ramteam.classplanner.model.Announcement;
import pl.ramteam.classplanner.model.Member;

import java.util.List;

@Repository
public interface AnnouncementRepository extends JpaRepository<Announcement, Integer> {


  @Query("SELECT a From Announcement a where a.groupId = :groupId")
  List<Announcement> findAllByGroupId(@Param("groupId") int groupId);


}
