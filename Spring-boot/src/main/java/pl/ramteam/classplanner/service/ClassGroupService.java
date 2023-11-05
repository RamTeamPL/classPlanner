package pl.ramteam.classplanner.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.ramteam.classplanner.model.ClassGroup;
import pl.ramteam.classplanner.model.Member;
import pl.ramteam.classplanner.repository.ClassGroupRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ClassGroupService {

    private final ClassGroupRepository classGroupRepository;

    public List<Member> getGroups(int groupId){
        return classGroupRepository.FindAllClassGroups(groupId);
    }

    public ClassGroup findClassGroupByMemberId(int memberId){
      return classGroupRepository.findClassGroupByMemberId(memberId);
    }
}
