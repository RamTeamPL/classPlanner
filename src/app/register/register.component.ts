import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: false,
})
export class RegisterComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  

  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'Musisz uzupełnić pole';
    }

    if (this.email.hasError('required')) {
      return 'Musisz uzupełnić pole';
    }

    return this.email.hasError('email') ? 'Nieprawidłowy e-mail' : '';
  }
  hide = true;

  
}
