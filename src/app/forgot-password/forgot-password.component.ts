import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotPasswordDetails = {
    email: ''
  };

  onSubmit() {
    const validationError = this.validateInput(this.forgotPasswordDetails.email);
    if (validationError) {
      alert(validationError);
      return;
    }

    // code to send email with password reset link
  }

  validateInput(email: string): string | null {
    if (!email) {
      return 'Please enter your email';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Invalid email format';
    }

    // Validation successful
    return null;
  }
}
