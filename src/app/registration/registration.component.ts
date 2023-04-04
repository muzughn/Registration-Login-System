import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  newUser: User = { username: '', email: '', password: '', confirmPassword: '' };
  registrationDetails = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Faculty',
    registrationPending: true
  };

  onSubmit() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!this.registrationDetails.username || !this.registrationDetails.email || !this.registrationDetails.password) {
      alert('Please provide proper username, email and password');
      return;
    }

    if (!emailRegex.test(this.registrationDetails.email)) {
      alert('Please provide a valid email address');
      return;
    }

    if (this.registrationDetails.password.length < 6) {
      alert('Password should be at least 6 characters');
      return;
    }

    if (this.registrationDetails.password !== this.registrationDetails.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const existingRegistrations = JSON.parse(localStorage.getItem('registrationDetails') || '[]');
    existingRegistrations.push(this.registrationDetails);
    localStorage.setItem('registrationDetails', JSON.stringify(existingRegistrations));
    alert('Registration successful! Your request is pending for admin approval.');
  }
}

