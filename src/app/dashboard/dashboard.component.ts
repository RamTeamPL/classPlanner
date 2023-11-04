import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpringbootService  } from '../springBoot/springboot.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  centered = false;
  disabled = false;
  unbounded = false;
  color = "rgba(114, 114, 114, 0.495)";



  constructor(private http:HttpClient, private spring:SpringbootService ){ }

  announcements:any; // do testów to zakomentować


   ngOnInit() { //nie komentować metody
      let response = this.http.get("http://localhost:8080/announcementByMemberId/" + this.spring.getMemberId());           //do testów zakomentować ciało
      response.subscribe((data) => this.announcements = data);
   }
   
}
