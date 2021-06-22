import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from '../../shared/models/category.model';
import { Transaction } from '../../shared/models/transaction.model';
import { CategoryService } from '../../shared/services/category.service';
import { TransactionService } from '../../shared/services/transaction.service';
import { TransactionListComponent } from '../../container/transaction-list/transaction-list.component';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent implements OnInit {

  type: string = "";
  transaction$!: Observable<Transaction>;
  categories$!: Observable<Category[]>;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService,
              private transactionService: TransactionService,
              private transactionListComponent: TransactionListComponent) {}

  ngOnInit(): void {

    this.transactionListComponent.matDrawer.open();

    this.transaction$ = this.route.params
        .pipe(switchMap(param => this.transactionService.getById(param.id)));

    this.categories$ = this.categoryService.get();
  }

  onSave(event: Transaction) {
    this.transactionService.post(event).subscribe();
  }

  onCancel() {
    this.transactionListComponent.matDrawer.close();
    this.router.navigate(['/'], {relativeTo: this.route});
  }
}
