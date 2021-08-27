import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Store } from 'src/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { BudgetDashboardModule } from './budget-dashboard/budget-dashboard.module';
import { TransactionsModule } from './transactions/transactions.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BudgetDashboardModule,
    TransactionsModule,
    BrowserAnimationsModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
