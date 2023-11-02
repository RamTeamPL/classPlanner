package pl.ramteam.classplanner.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.ramteam.classplanner.model.Announcement;
@Repository
public interface AnnouncementRepository extends JpaRepository<Announcement, Integer> {
}
