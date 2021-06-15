import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../../shared/models/transaction.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  @Input()
  data: Transaction[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
