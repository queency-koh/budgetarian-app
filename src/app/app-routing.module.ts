import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    loadChildren: async () => (await import('./auth/auth.module')).AuthModule
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: async () => (await import('./budget-dashboard/budget-dashboard.module')).BudgetDashboardModule
  },
  {
    path: 'transactions',
    canActivate: [AuthGuard],
    loadChildren: async () => (await import('./transactions/transactions.module')).TransactionsModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
