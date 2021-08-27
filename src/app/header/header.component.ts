import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../auth/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Input()
  user: User | null = null;

  @Output() 
  signOut = new EventEmitter<any>();

  constructor() { }

  signOutUser() {
    this.signOut.emit();
  }
}
