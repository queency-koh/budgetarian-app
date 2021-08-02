import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  error: string = '';

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  async register(e: FormGroup) {
    const { email, password } = e.value;

    try {
      await this.authService.createUser(email, password);
      this.router.navigate(['/dashboard']);
    } catch(error) {
      this.error = error.message;
    }
  }
}
