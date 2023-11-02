package pl.ramteam.classplanner.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Entity
@Getter
@Setter
@Table(name = "announcement")
public class Announcement {
    @Id
    int id;
    int groupId;
    int creatorId;
    String title;
    String content;
    Timestamp created;
}
