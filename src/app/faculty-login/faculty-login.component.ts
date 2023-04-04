import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../register/user.model';

@Component({
  selector: 'app-Faculty-Login',
  templateUrl: './faculty-login.component.html',
  styleUrls: ['./faculty-login.component.css']
})
export class FacultyLoginComponent {
  user: User = {
    username: '',
    password: ''
  };
  users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

  onSubmit() {
    const existingUser = this.users.find(u => u.username === this.user.username);
    if (existingUser && existingUser.password === this.user.password) {
      // User is authenticated
    } else {
      // Authentication failed
    }
  }
  onForgotPassword() {
    // TODO: Implement forgot password logic here
  }
}

