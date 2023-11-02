package pl.ramteam.classplanner.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.ramteam.classplanner.model.Announcement;
import pl.ramteam.classplanner.service.AnnouncementService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class AnnouncementController {

    private final AnnouncementService announcementService;
    @GetMapping("/test3")
    public List<Announcement> test3(){
        return announcementService.getAnnouncements();
    }
}
