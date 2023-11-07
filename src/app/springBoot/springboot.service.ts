import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpringbootService {
  memberId: any = 9;
  springBootIp: any =  "158.180.47.208";

  getMemberId(){
    return this.memberId;
  }

  getspringBootIp(){
    return this.springBootIp;
  }

  constructor() { }
}
