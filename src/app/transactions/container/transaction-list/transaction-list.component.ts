import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Transaction } from '../../../shared/models/transaction.model';
import { TransactionService } from '../../../shared/services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  @ViewChild('matDrawer', {static: true}) matDrawer!: MatDrawer;

  transactions$!: Observable<Transaction[]>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private transactionService : TransactionService
              ) {}

  ngOnInit(): void {
    this.transactions$ = this.transactionService.get();
  }

  createTransaction(): void
  {
    // Go to transaction
    this.router.navigate(['/expense/new'], {relativeTo: this.route});
  }
}
