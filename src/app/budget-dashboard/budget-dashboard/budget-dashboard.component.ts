import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategoryService } from 'src/app/shared/services/category.service';
import { TransactionService } from 'src/app/shared/services/transaction.service';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-budget-dashboard',
  templateUrl: './budget-dashboard.component.html',
  styleUrls: ['./budget-dashboard.component.scss']
})
export class BudgetDashboardComponent implements OnInit {
  savings: number = 0;
  income: number = 115000;
  expenses$!: Observable<number>;
  categories: Category[] = new Array<Category>();
  transactions$: Observable<Transaction[]> = new Observable<Transaction[]>();

  constructor(private categoryService: CategoryService,
              private transactionService: TransactionService) { }

  ngOnInit(): void {

    // Get All Transactions
    const transactions$ = this.transactionService.get();

    // Calculate Total Expense
    this.expenses$ = transactions$.pipe(
                      map(transactions => transactions
                        .reduce((total, transaction) => total + (+transaction.amount), 0)));

    // Calculate Total Savings
    this.expenses$.subscribe((expenses) => this.savings = this.income - expenses);

    this.transactions$ = transactions$.pipe(
                          map(transactions => transactions
                            .slice(0, 10)
                            .sort((a,b) =>  a.date < b.date ? 1 : -1)
                            ));

    const categories$ = this.categoryService.get()
                            .pipe(
                              map(categories => categories
                                .sort((a,b) =>  a.budget < b.budget ? 1 : -1)
                                ));

    combineLatest([categories$, transactions$]).subscribe(([categories, transactions]) => {
      this.categories = categories.map(category => {
        const expenses = transactions
                          .filter(transaction => transaction.category === category.name)
                          .reduce((total, transaction) => total + (+transaction.amount), 0);

      return {...category, expenses};
      });
    });
  }
}
