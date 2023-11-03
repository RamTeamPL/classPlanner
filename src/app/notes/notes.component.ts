import { Component } from '@angular/core';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  panelOpenState = false;
  color = "rgba(114, 114, 114, 0.495)"
}
