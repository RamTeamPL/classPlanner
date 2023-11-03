import { Component } from '@angular/core';

@Component({
  selector: 'app-new-classmate',
  templateUrl: './new-classmate.component.html',
  styleUrls: ['./new-classmate.component.css'],
})
export class NewClassmateComponent {
  //users ma pobierać z bazy
  users = [
    {id: 0, name: 'Bartek', lastname: 'Olszyński', avatar:'../assets/img/icons8-male-user-96.png'},
    {id: 1, name: 'Miłosz', lastname: 'Kwiat', avatar:'../assets/img/icons8-male-user-96.png'}
  ]
}
