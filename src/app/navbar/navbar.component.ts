import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  centered = false;
  disabled = false;
  unbounded = false;
  color = "rgba(114, 114, 114, 0.495)"; 
}
