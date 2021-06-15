import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from '../../shared/models/category.model';
import { Transaction } from '../../shared/models/transaction.model';
import { CategoryService } from '../../shared/services/category.service';
import { TransactionService } from '../../shared/services/transaction.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent implements OnInit {

  categories$!: Observable<Category[]>;

  form: any

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private categoryService: CategoryService,
              private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      console.log(params);
      this.form = this.fb.group({
        id: [Guid.raw()],
        type: [params.get('type')],
        date: [new Date()],
        title: [''],
        category: [''],
        amount: ['0.00'],
        notes: ['']
      });
    })

    this.categories$ = this.categoryService.get();
  }

  onSave(event: Transaction) {
    this.transactionService.post(event).subscribe();
  }
}
