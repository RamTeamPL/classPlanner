import { Injectable } from '@angular/core';
import { SpringbootService  } from '../springBoot/springboot.service';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private spring:SpringbootService){}
}
