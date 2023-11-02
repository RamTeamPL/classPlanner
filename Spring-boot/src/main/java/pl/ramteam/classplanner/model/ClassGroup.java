
package pl.ramteam.classplanner.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "classGroup")
public class ClassGroup {
    @Id
    int id;
    String name;
    String description;
    @OneToMany
    @JoinColumn(name = "groupId", updatable = false, insertable = false)
    private List<GroupMember> groupMembers;
//    @OneToMany
//    @JoinColumn(name = "groupId", updatable = false, insertable = false)
//    private List<Request> requests;
}

