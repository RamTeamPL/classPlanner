package pl.ramteam.classplanner.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "groupMember")

public class GroupMember {
    @Id
    int groupId;
    int memberId;
    int roleId;
}
