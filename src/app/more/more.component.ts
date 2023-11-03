import { Component } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent {
  centered = false;
  disabled = false;
  unbounded = false;
  color = "rgba(114, 114, 114, 0.495)";
  users = [
    {id: 0, name: 'Bartek', lastname: 'Olszyński', avatar:'../assets/img/icons8-male-user-96.png'},
    {id: 1, name: 'Miłosz', lastname: 'Kwiat', avatar:'../assets/img/icons8-male-user-96.png'}
  ]
}
