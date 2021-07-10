import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/shared/services/transaction.service';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-budget-dashboard',
  templateUrl: './budget-dashboard.component.html',
  styleUrls: ['./budget-dashboard.component.scss']
})
export class BudgetDashboardComponent implements OnInit {
  savings: number = 0;
  income: number = 115000;
  expenses$!: Observable<number>;
  transactions: Transaction[] = new Array<Transaction>();

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {

    // Get All Transactions
    const transactions$ = this.transactionService.get();

    // Calculate Total Expense
    this.expenses$ = transactions$
      .pipe(
        map(transactions => transactions
          .reduce((total, transaction) => total + (+transaction.amount), 0)));

    // Calculate Total Savings
    this.expenses$.subscribe((expenses) => this.savings = this.income - expenses);
  }
}
