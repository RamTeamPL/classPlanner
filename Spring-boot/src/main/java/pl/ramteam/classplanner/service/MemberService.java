package pl.ramteam.classplanner.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.ramteam.classplanner.model.Announcement;
import pl.ramteam.classplanner.model.GroupMember;
import pl.ramteam.classplanner.model.Member;
import pl.ramteam.classplanner.repository.MemberRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public List<Member> getMembers(){
        return memberRepository.findAll();
    }

    public Member addMember(Member member){
        return memberRepository.save(member);
    }
    @Transactional
    public Member editMember(Member member) {
        Member editedMember = memberRepository.findById(member.getId()).orElseThrow();
        editedMember.setName(member.getName());
        editedMember.setSurname(member.getSurname());
        editedMember.setPassword(member.getPassword());
        return editedMember;
    }

    public void deleteMember(int id) {
        memberRepository.deleteById(id);
    }

  public List<Announcement> findAnnouncementsByMemberId(int memberId){
      return memberRepository.FindAnnouncementsByMemberId(memberId);
  }

  public Member findById(int id) {
      return memberRepository.findById(id).orElseThrow();
  }

  public Announcement findLastAnnouncementsByMemberId(int memberId) {
    return memberRepository.FindLastAnnouncementsByMemberId(memberId);
  }

  public List<Member> findStudentCouncilByMemberId(int memberId) {
    return memberRepository.findStudentCouncilByMemberId(memberId);
  }

  public GroupMember findRoleIdByMemberId(int memberId) {
    return memberRepository.findRoleIdByMemberId(memberId);
  }

  public List<Member> findGroupMembersByMemberId(int memberId) {
    return memberRepository.findGroupMembersByMemberId(memberId);
  }
}
