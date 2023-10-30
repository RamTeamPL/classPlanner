import { Component } from '@angular/core';

@Component({
  selector: 'app-treasurer',
  templateUrl: './treasurer.component.html',
  styleUrls: ['./treasurer.component.css'],
  
  
})
export class TreasurerComponent {
  centered = false;
  disabled = false;
  unbounded = false;
  color = "rgba(114, 114, 114, 0.495)";
  panelOpenState = false;
}

