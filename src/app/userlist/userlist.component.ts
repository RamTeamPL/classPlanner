import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpringbootService  } from '../springBoot/springboot.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {



  constructor(private http:HttpClient, private spring:SpringbootService ){ }

  members :any;

ngOnInit() {
  let response = this.http.get("http://"+this.spring.getspringBootIp()+":8080/getGroupMembersByMemberId/" + this.spring.getMemberId());
  response.subscribe((data:any) => this.members = data);
     
  };

    // ngOnInit() {
    //   let response = this.http.get("http://"+this.spring.getspringBootIp()+":8080/getGroupMembersByMemberId/" + this.spring.getMemberId());
    //   response.subscribe((data:any) =>{
    //      this.members = data
    //      this.members.forEach(member => {
    //       let response3 = this.http.get("http://"+this.spring.getspringBootIp()+":8080/getRoleIdByMemberId/" + member.id);
    //       response3.subscribe((data) =>this.role = this.role + data);
    //      });
         
    //     });
  
}


