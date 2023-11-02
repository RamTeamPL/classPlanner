package pl.ramteam.classplanner.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CurrentTimestamp;


import java.sql.Timestamp;

@Table(name = "form")
@Entity
@Setter
@Getter
public class Form {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    int id;
    int groupId;
    int creatorId;
    String title;
    String content;
    boolean overtSurvey;
    @CurrentTimestamp
    Timestamp created;
}
