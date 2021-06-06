import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { TransactionsComponent } from './container/transactions/transactions.component';
import { TransactionListComponent } from './component/transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './component/transaction-detail/transaction-detail.component';



@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionListComponent,
    TransactionDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    TransactionsComponent
  ]
})
export class TransactionsModule { }
