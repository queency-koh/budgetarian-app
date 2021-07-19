import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { TransactionService } from 'src/app/shared/services/transaction.service';

@Component({
  selector: 'app-recent-transaction',
  templateUrl: './recent-transaction.component.html',
  styleUrls: ['./recent-transaction.component.scss']
})
export class RecentTransactionComponent implements OnInit {

  transactions$!: Observable<Transaction[]>;
  columns: string[] = ['date', 'category' ,'title', 'amount'];

  constructor(private transactionService : TransactionService) { }

  ngOnInit(): void {
    this.transactions$ = this.transactionService.get().pipe(
      map(transactions => transactions
        .slice(0, 10)
        .sort((a,b) =>  a.date < b.date ? 1 : -1)
        ));
  }

  trackByFn(index: number, item: any): any
  {
      return item.id || index;
  }
}
