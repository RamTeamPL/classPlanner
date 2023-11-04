package pl.ramteam.classplanner.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CurrentTimestamp;

import java.sql.Timestamp;

@Entity
@Getter
@Setter
@Table(name = "announcement")
public class Announcement {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    int id;
    int groupId;
    int creatorId;
    String title;
    String content;
    @CurrentTimestamp
    Timestamp created;
}
