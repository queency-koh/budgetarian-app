import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsComponent } from './container/transactions/transactions.component';
import { TransactionListComponent } from './component/transaction-list/transaction-list.component';



@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TransactionsComponent
  ]
})
export class TransactionsModule { }
