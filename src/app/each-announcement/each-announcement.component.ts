import { Component } from '@angular/core';
import { DataService } from '../announcements/data.service';
import { HttpClient } from '@angular/common/http';
import { SpringbootService  } from '../springBoot/springboot.service';

@Component({
  selector: 'app-each-announcement',
  templateUrl: './each-announcement.component.html',
  styleUrls: ['./each-announcement.component.css']
})
export class EachAnnouncementComponent {
  dataService = DataService;
  centered = false;
  disabled = false;
  unbounded = false;
  color = "rgba(114, 114, 114, 0.495)";
  id = this.dataService.sharedData;
  


  constructor(private http:HttpClient, private spring:SpringbootService ){ }

  announcement :any;
  member:any;

  ngOnInit() {
    let response = this.http.get("http://localhost:8080/announcementById/" + this.id);
    response.subscribe((data) => {
      this.announcement = data;
      let response2 = this.http.get("http://localhost:8080/creatorById/" + this.announcement.creatorId); //do stylowania komentować tylko ciało
      response2.subscribe((data2) => this.member = data2);
    });
  }
}
