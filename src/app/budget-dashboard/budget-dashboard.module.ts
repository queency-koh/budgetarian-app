import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetDashboardComponent } from './budget-dashboard/budget-dashboard.component';



@NgModule({
  declarations: [
    BudgetDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BudgetDashboardComponent
  ]
})
export class BudgetDashboardModule { }
