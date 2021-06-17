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
            path: ':id',
            component: TransactionDetailComponent
          },
          {
            path: ':type',
            component: TransactionDetailComponent
          }
        ]
      }
    ]
  }
];

// const routes: Routes[] = [
//   {
//       path     : '',
//       component: Transac,
//       resolve  : {
//           tags: ContactsTagsResolver
//       },
//       children : [
//           {
//               path     : '',
//               component: ContactsListComponent,
//               resolve  : {
//                   tasks    : ContactsResolver,
//                   countries: ContactsCountriesResolver
//               },
//               children : [
//                   {
//                       path         : ':id',
//                       component    : ContactsDetailsComponent,
//                       resolve      : {
//                           task     : ContactsContactResolver,
//                           countries: ContactsCountriesResolver
//                       },
//                       canDeactivate: [CanDeactivateContactsDetails]
//                   }
//               ]
//           }
//       ]
//   }
// ];

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
  exports: [
    RouterModule
  ]
})
export class TransactionsModule { }
