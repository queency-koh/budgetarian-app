import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table'
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BudgetDashboardComponent } from './budget-dashboard/budget-dashboard.component';
import { BudgetStatusCardComponent } from './budget-status-card/budget-status-card.component';
import { BudgetSummaryComponent } from './budget-summary/budget-summary.component';
import { RecentTransactionComponent } from './recent-transaction/recent-transaction.component';

const routes: Routes = [
  {
    path: '',
    component: BudgetDashboardComponent,
  }
];

@NgModule({
  declarations: [
    BudgetDashboardComponent,
    BudgetStatusCardComponent,
    BudgetSummaryComponent,
    RecentTransactionComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatTableModule,
    MatProgressBarModule
  ],
  exports: [
    BudgetDashboardComponent
  ]
})
export class BudgetDashboardModule { }
