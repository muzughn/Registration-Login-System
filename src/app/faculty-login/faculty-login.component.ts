import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../registration/user.model';

@Component({
  selector: 'app-faculty-login',
  templateUrl: './faculty-login.component.html',
  styleUrls: ['./faculty-login.component.css']
})
export class FacultyLoginComponent {
  user: User = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: ''
  };
  users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

  onSubmit() {
    if (!this.user.email || !this.user.password) {
      alert('Please provide proper email and password');
      return;
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.user.email)) {
      alert('Please provide a valid email address');
      return;
    }

    const existingUser = this.users.find(u => u.email === this.user.email);
    if (existingUser && existingUser.password === this.user.password) {
      // User is authenticated
    } else {
      alert('Authentication failed');
    }
  }

  onForgotPassword() {
    // TODO: Implement forgot password logic here
  }
}
