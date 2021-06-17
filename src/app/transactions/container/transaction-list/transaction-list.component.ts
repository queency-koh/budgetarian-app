import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from '../../shared/models/transaction.model';
import { TransactionService } from '../../shared/services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit{

  @ViewChild('matDrawer', {static: true}) matDrawer!: MatDrawer;

  transactions: Transaction[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private transactionService : TransactionService
              ) {}

  ngOnInit(): void {
    this.transactionService.get().subscribe(response => this.transactions = response);
  }

  createTransaction(type: 'expense' | 'income'): void
  {
    // Go to transaction
    this.router.navigate(['/', type], {relativeTo: this.route});
  }
}
