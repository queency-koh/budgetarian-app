import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'; 

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { TransactionsComponent } from './container/transactions/transactions.component';
import { TransactionListComponent } from './component/transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './component/transaction-detail/transaction-detail.component';
import { TransactionFormComponent } from './component/transaction-form/transaction-form.component';

const routes: Routes = [
  { path: 'transaction/:type', component: TransactionDetailComponent }
];

@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionListComponent,
    TransactionDetailComponent,
    TransactionFormComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    RouterModule,
    TransactionsComponent
  ]
})
export class TransactionsModule { }
