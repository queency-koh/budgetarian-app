import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from 'src/app/shared/models/category.model';
import { CategoryService } from 'src/app/shared/services/category.service';
import { TransactionService } from 'src/app/shared/services/transaction.service';

@Component({
  selector: 'app-budget-summary',
  templateUrl: './budget-summary.component.html',
  styleUrls: ['./budget-summary.component.scss']
})
export class BudgetSummaryComponent implements OnInit {

  categories!: Category[];

  constructor(private categoryService: CategoryService,
              private transactionService: TransactionService) { }

  ngOnInit(): void {
    const categories$ = this.categoryService.get()
        .pipe(
          map(categories => categories
            .sort((a,b) =>  a.budget < b.budget ? 1 : -1)
            ));
    
    const transactions$ = this.transactionService.get();

    combineLatest([categories$, transactions$])
    .subscribe(([categories, transactions]) => {
      this.categories = categories.map(category => {
        const expenses = transactions
                          .filter(transaction => transaction.category === category.name)
                          .reduce((total, transaction) => total + (+transaction.amount), 0);

       return {...category, expenses};
      });
    })
  }
}
