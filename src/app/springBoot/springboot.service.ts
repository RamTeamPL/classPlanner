import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpringbootService {
  memberId: any = 9;
  springBootIp: any =  "127.0.0.1";
  //springBootIp: any =  "192.168.1.110";

  getMemberId(){
    return this.memberId;
  }

  getspringBootIp(){
    return this.springBootIp;
  }

  constructor() { }
}
