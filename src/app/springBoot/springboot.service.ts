import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpringbootService {
  memberId: any = 8;

  getMemberId(){
    return this.memberId;
  }

  constructor() { }
}
