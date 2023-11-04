package pl.ramteam.classplanner.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.ramteam.classplanner.model.Announcement;
import pl.ramteam.classplanner.repository.AnnouncementRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AnnouncementService {

    private final AnnouncementRepository announcementRepository;

    public List<Announcement> findAllByGroupId(int groupId){
        return announcementRepository.findAllByGroupId(groupId);
    }

  public Announcement findById(int id) {
      return announcementRepository.findById(id).orElseThrow();
  }
}
