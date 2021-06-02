import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TransactionsComponent } from './container/transactions/transactions.component';
import { TransactionListComponent } from './component/transaction-list/transaction-list.component';


@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    TransactionsComponent
  ]
})
export class TransactionsModule { }
