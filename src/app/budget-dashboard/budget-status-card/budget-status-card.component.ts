import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-budget-status-card',
  templateUrl: './budget-status-card.component.html',
  styleUrls: ['./budget-status-card.component.scss']
})
export class BudgetStatusCardComponent implements OnInit {

  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() amount: number = 0;
  @Output() view: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
