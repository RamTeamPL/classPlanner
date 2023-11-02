package pl.ramteam.classplanner.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
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
        editedMember.setAvatar(member.getAvatar());
        editedMember.setName(member.getName());
        editedMember.setSurname(member.getSurname());
        editedMember.setPassword(member.getPassword());
        editedMember.setNickname(member.getNickname());
        return editedMember;
    }

    public void deleteMember(int id) {
        memberRepository.deleteById(id);
    }
}
