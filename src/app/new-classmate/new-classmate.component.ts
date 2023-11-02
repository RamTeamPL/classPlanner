import { Component } from '@angular/core';

@Component({
  selector: 'app-new-classmate',
  templateUrl: './new-classmate.component.html',
  styleUrls: ['./new-classmate.component.css'],
})
export class NewClassmateComponent {
  //users ma pobierać z bazy
  users = [
    {id: 0, imie: 'Bartek', nazwisko: 'Olszyński', avatar:'../assets/img/icons8-male-user-96.png'},
    {id: 1, imie: 'Miłosz', nazwisko: 'Kwiat', avatar:'../assets/img/icons8-male-user-96.png'}
  ]
}
