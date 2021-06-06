import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../shared/models/transaction.model';
import { TransactionService } from '../../shared/services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transactions: Transaction[] = [];

  constructor(private transactionService : TransactionService) { }

  ngOnInit(): void {
    this.transactionService.get().subscribe(response => this.transactions = response);
  }
}
