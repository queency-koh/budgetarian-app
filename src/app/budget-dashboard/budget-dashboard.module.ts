import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetDashboardComponent } from './budget-dashboard/budget-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { BudgetStatusCardComponent } from './budget-status-card/budget-status-card.component';

const routes: Routes = [
  {
    path: '',
    component: BudgetDashboardComponent,
  }
];

@NgModule({
  declarations: [
    BudgetDashboardComponent,
    BudgetStatusCardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    BudgetDashboardComponent
  ]
})
export class BudgetDashboardModule { }
