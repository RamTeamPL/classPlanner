package pl.ramteam.classplanner.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pl.ramteam.classplanner.model.Announcement;
import pl.ramteam.classplanner.service.AnnouncementService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class AnnouncementController {

    private final AnnouncementService announcementService;
    @GetMapping("/announcement/{groupId}")
    public List<Announcement> announcement(@PathVariable int groupId){
        return announcementService.findAllByGroupId(groupId);
    }
    @CrossOrigin("http://localhost:4200")
    @GetMapping("/announcementById/{id}")
    public Announcement announcementById(@PathVariable int id){
      return announcementService.findById(id);
    }

  @CrossOrigin("http://localhost:4200")
  @PostMapping("/announcement")
  public Announcement addAnnouncement(@RequestBody Announcement announcement){
      return announcementService.addAnnouncement(announcement);
  }
}
