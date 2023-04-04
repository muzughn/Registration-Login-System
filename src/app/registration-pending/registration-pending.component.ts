import { Component } from '@angular/core';

interface Registration {
  username: string;
  password: string;
  role: string;
  registrationPending: boolean;
}

@Component({
  selector: 'app-registration-pending',
  templateUrl: './registration-pending.component.html',
  styleUrls: ['./registration-pending.component.css']
})
export class RegistrationPendingComponent {
  registrationDetails: Registration[] = JSON.parse(localStorage.getItem('registrationDetails') || '');

  onVerifyRegistration(registration: Registration) {
    registration.registrationPending = false;
    localStorage.setItem('registrationDetails', JSON.stringify(this.registrationDetails));
  }
}
