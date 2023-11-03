package pl.ramteam.classplanner.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
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


}
