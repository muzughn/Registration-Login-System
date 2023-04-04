import { Component } from '@angular/core';
import { User } from '../interfaces/user.interface';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  loginDetails = {
    username: '',
    password: ''
  };
  registrationDetails: User[] = JSON.parse(localStorage.getItem('registrationDetails') || '[]');
  verifiedRegistrations: User[] = [];

  onSubmit() {
    if (this.loginDetails.username === 'admin' && this.loginDetails.password === 'password') {
      for (const registration of this.registrationDetails) {
        if (registration.role === 'Faculty' && registration.registrationPending) {
          this.verifiedRegistrations.push(registration);
        }
      }
    } else {
      alert('Invalid login details!');
    }
  }

  onVerifyRegistration(registration: User) {
    registration.registrationPending = false;
    localStorage.setItem('registrationDetails', JSON.stringify(this.registrationDetails));
  }
}
