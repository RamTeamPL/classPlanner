package pl.ramteam.classplanner.model;

import jakarta.persistence.*;

@Entity
public class Request {
    @Id
    int groupId;
//    @OneToOne
//    @JoinColumn(name = "memberId", updatable = false, insertable = false)
    int memberId;
}
