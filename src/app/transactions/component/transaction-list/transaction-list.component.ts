import { Component, Input, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from '../../shared/models/transaction.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent{

  @ViewChild('matDrawer', {static: true}) matDrawer!: MatDrawer;

  @Input()
  data: Transaction[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router) {}

  createTransaction(type: 'expense' | 'income'): void
  {
    // Go to transaction
    this.router.navigate(['/', type], {relativeTo: this.route});
  }
}
