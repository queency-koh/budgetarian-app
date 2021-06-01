import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BudgetDashboardModule } from './budget-dashboard/budget-dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BudgetDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
