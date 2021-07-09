import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetDashboardComponent } from './budget-dashboard/budget-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BudgetDashboardComponent,
  }
];

@NgModule({
  declarations: [
    BudgetDashboardComponent,
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
