import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpringbootService  } from '../springBoot/springboot.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  member:any;
  classGroup:any;
  roleId:any;
  role: any;

  constructor(private http:HttpClient, private spring:SpringbootService ){ }


  ngOnInit() { //nie komentować metody
    let response = this.http.get("http://localhost:8080/creatorById/" + this.spring.getMemberId());           //do testów zakomentować ciało
    response.subscribe((data) => this.member = data);

    let response2 = this.http.get("http://localhost:8080/getClassGroupByMemberId/" + this.spring.getMemberId());           //do testów zakomentować ciało
    response2.subscribe((data) => this.classGroup = data);

    let response3 = this.http.get("http://localhost:8080/getRoleIdByMemberId/" + this.spring.getMemberId());           //do testów zakomentować ciało
    response3.subscribe((data) =>{
      this.role = data;
      console.log(this.role[0]);
      switch(this.role[0].roleId){
        case 1: this.role = "Przewodniczący"; break;
        case 2: this.role = "Zastępca przewodniczącego"; break;
        case 3: this.role = "Skarbnik"; break;
        default: this.role = "Brak funkcji w samorządzie"; break;
      }
    });

 }

}
