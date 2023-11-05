import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-treasurer',
  templateUrl: './treasurer.component.html',
  styleUrls: ['./treasurer.component.css'],
  
  
})
export class TreasurerComponent{
  panelOpenState = true;
  color = "rgba(114, 114, 114, 0.495)"
  elementToHide: any;

  treasurer = true;
}

