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

  announcement:any;
  studentCouncil: any;

   ngOnInit() {
      let response = this.http.get("http://"+this.spring.getspringBootIp()+":8080/announcementByMemberIdOrderBy/" + this.spring.getMemberId());
      response.subscribe((data) => this.announcement = data);

      console.log(this.spring.getspringBootIp());

      let response2 = this.http.get("http://"+this.spring.getspringBootIp()+":8080/getStudentCouncil/" + this.spring.getMemberId());
      response2.subscribe((data) => this.studentCouncil = data);
   }


   
}
