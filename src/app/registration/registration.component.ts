import { Component } from '@angular/core';
import { User } from './user.model';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
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
