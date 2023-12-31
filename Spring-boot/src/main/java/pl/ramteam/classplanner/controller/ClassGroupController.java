package pl.ramteam.classplanner.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pl.ramteam.classplanner.model.Announcement;
import pl.ramteam.classplanner.model.ClassGroup;
import pl.ramteam.classplanner.model.Member;
import pl.ramteam.classplanner.service.ClassGroupService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ClassGroupController {

    private final ClassGroupService classGroupService;
    @GetMapping("/classGroup/{groupId}")
    public List<Member> classGroup(@PathVariable("groupId") int groupId){
        return classGroupService.getGroups(groupId);
    }

    @GetMapping("/getClassGroupByMemberId/{memberId}")
    @CrossOrigin("http://localhost:4200")
    public ClassGroup getClassGroupByMemberId(@PathVariable int memberId){
        return classGroupService.findClassGroupByMemberId(memberId);
    }
}
