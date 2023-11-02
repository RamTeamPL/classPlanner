import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  centered = false;
  disabled = false;
  unbounded = false;
  color = "rgba(114, 114, 114, 0.495)";
  panelOpenState = false;
}
