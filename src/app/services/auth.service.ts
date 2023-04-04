import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getCurrentUser(): import("../registration/user.model").User {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
