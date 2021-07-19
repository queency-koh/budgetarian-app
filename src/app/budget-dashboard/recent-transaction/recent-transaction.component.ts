import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Transaction } from 'src/app/shared/models/transaction.model';

@Component({
  selector: 'app-recent-transaction',
  templateUrl: './recent-transaction.component.html',
  styleUrls: ['./recent-transaction.component.scss']
})
export class RecentTransactionComponent {

  @Input()
  transactions: Transaction[] = new Array<Transaction>();
  
  columns: string[] = ['date', 'category' ,'title', 'amount'];

  constructor() { }

  ngOnInit(): void {

  }

  trackByFn(index: number, item: any): any
  {
      return item.id || index;
  }
}
