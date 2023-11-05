import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { SpringbootService  } from '../springBoot/springboot.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})

export class AnnouncementsComponent implements OnInit {
  dataService = DataService;
  centered = false;
  disabled = false;
  unbounded = false;
  color = "rgba(114, 114, 114, 0.495)";


  constructor(private http:HttpClient, private spring:SpringbootService ){ }

  members:any;
  announcements: any[] = [];

// ...

ngOnInit() {
  let response = this.http.get("http://localhost:8080/announcementByMemberId/" + this.spring.getMemberId());
  response.subscribe((data:any) => {
    this.announcements = data;

    

  });
}

// getMember(creatorId: number): any {
//   let response2 = this.http.get("http://localhost:8080/creatorById/" + creatorId);
//   response2.subscribe((data2) => {
//     this.members = data2;
//     return this.members;
//   });
// }


  
   updateId(id: number){
    this.dataService.sharedData = id;
  }

}
