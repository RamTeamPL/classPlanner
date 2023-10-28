import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  centered = false;
  disabled = false;
  unbounded = false;
  color = "rgba(128, 128, 128, 0.296)";
}
