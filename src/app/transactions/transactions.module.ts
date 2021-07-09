import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'; 

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { TransactionsComponent } from './container/transactions/transactions.component';
import { TransactionListComponent } from './container/transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './component/transaction-detail/transaction-detail.component';
import { TransactionFormComponent } from './component/transaction-form/transaction-form.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionsComponent,
    children : [
      {
        path: '',
        component: TransactionListComponent,
        children: [
          {
            path: ':type/new',
            component: TransactionDetailComponent
          },
          {
            path: ':type/:id',
            component: TransactionDetailComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionListComponent,
    TransactionDetailComponent,
    TransactionFormComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule
  ],
  exports: []
})
export class TransactionsModule { }
