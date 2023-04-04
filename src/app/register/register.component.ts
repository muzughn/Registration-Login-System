import { Component } from '@angular/core';
import { User } from './user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  newUser: User = { username: '', password: '' };
  registrationDetails = {
    username: '',
    password: '',
    role: 'Faculty',
    registrationPending: true
  };

  onSubmit() {
    // Do not save to local storage here
    alert('Registration submitted! Please wait for admin verification.');
  }
}
