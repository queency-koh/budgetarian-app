import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { tap } from 'rxjs/operators';
import { Store } from 'src/store';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth$ = this.af.authState
    .pipe(tap(next => {
      if (!next) {
        this.store.set('User', null);
      } else {
        const user: User = {
          email: next?.email,
          uid: next?.uid,
          authenticated: true
        };
  
        this.store.set('User', user);
      }
    }));

  constructor(
      private store: Store,
      private af: AngularFireAuth
    ) { }

  createUser(email: string, password: string) {
    return this.af.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    return this.af.signInWithEmailAndPassword(email, password);
  }
}
