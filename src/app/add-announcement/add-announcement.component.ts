import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpringbootService  } from '../springBoot/springboot.service';

@Component({
  selector: 'app-announcement-note',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.css']
})


export class AddAnnouncementComponent {
  color = "rgba(114, 114, 114, 0.495)"


  title: string = '';
  content: string = '';


  announcements:any;

  announcement:any;

  constructor(private http: HttpClient, private spring:SpringbootService) { }

  ngOnInit() { //nie komentować metody
    let response = this.http.get("http://localhost:8080/announcementByMemberId/" + this.spring.getMemberId());           //do testów zakomentować ciało
    response.subscribe((data) => this.announcements = data);
 }

  addAnnouncement() {
    const announcement = {
      groupId: 8,
      creatorId: this.spring.getMemberId(),
      title: this.title,
      content: this.content,
    };

    this.http.post('http://localhost:8080/announcement', announcement).subscribe((response) => {
      // Tutaj można obsłużyć odpowiedź od serwera
    });
  }
}