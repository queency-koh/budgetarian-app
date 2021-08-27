import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Store } from 'src/store';
import { User } from './auth/models/user';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'budgetarian-app';

  user$!: Observable<User>;
  subscription!: Subscription;

  constructor(
    private store: Store,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('User');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  async onSignOut() {
    await this.authService.logoutUser();
    this.router.navigate(['/login']);
  }
}
