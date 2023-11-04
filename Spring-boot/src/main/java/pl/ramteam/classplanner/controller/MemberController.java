package pl.ramteam.classplanner.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pl.ramteam.classplanner.model.Announcement;
import pl.ramteam.classplanner.model.Member;
import pl.ramteam.classplanner.service.MemberService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;
    @GetMapping("/member")
    public List<Member> test(){
        return memberService.getMembers();
    }

    @PostMapping("/member")
    public Member addMember(@RequestBody Member member){
        return memberService.addMember(member);
    }

    @PutMapping("/member")
    public Member editMember(@RequestBody Member member){
        return memberService.editMember(member);
    }

    /*@DeleteMapping("member")
    public void deleteMember(@RequestParam int id){
        memberService.deleteMember(id);
    }*/
    @CrossOrigin("http://localhost:4200")
    @GetMapping("/announcementByMemberId/{memberId}")
    public List<Announcement> getAnnouncementByMemberId(@PathVariable int memberId){
        return memberService.findAnnouncementsByMemberId(memberId);
    }

    @CrossOrigin("http://localhost:4200")
    @GetMapping("/creatorById/{id}")
    public Member getById(@PathVariable int id){
        return memberService.findById(id);
    }
}
