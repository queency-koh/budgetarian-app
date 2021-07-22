import { Component, Input } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-budget-summary',
  templateUrl: './budget-summary.component.html',
  styleUrls: ['./budget-summary.component.scss']
})
export class BudgetSummaryComponent {

  @Input() categories: Category[] = new Array<Category>();

  constructor() { }
}
