import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { FacultyLoginComponent } from './faculty-login/faculty-login.component';
import { RegistrationPendingComponent } from './registration-pending/registration-pending.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FacultyProfileComponent } from './faculty-profile/faculty-profile.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    FacultyLoginComponent,
    RegistrationPendingComponent,
    AdminLoginComponent,
    ForgotPasswordComponent,
    FacultyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
