import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  id: number = 0;
  type: string = "expense";
  categories$!: Observable<Category[]>;
  transactionForm: FormGroup;

  constructor(private fb: FormBuilder,
              private categoryService: CategoryService,
              private transactionService: TransactionService) {

      this.transactionForm = this.fb.group({
        type: [this.type],
        date: [new Date()],
        title: [''],
        category: [''],
        amount: ['0.00'],
        notes: ['']
      });
    }

  ngOnInit(): void {
    this.categories$ = this.categoryService.get();
  }

  onSubmit() {

    const transaction: Transaction = {
      id: Guid.raw(),
      type: this.type,
      date: new Date(this.transactionForm.value.date).toLocaleDateString('en-US'),
      title: this.transactionForm.value.title,
      category: this.transactionForm.value.category,
      amount: this.transactionForm.value.amount,
      notes: this.transactionForm.value.notes,
    };

    this.transactionService.post(transaction).subscribe(() => this.transactionForm.reset());
  }
}
