import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  categories$: Observable<Category[]>;
  transactionForm: FormGroup;

  constructor(private fb: FormBuilder,
              private categoryService: CategoryService,
              private transactionService: TransactionService) {
                
      this.transactionForm = this.fb.group({
        type: [''],
        date: [''],
        title: [''],
        category: [''],
        amount: [''],
        notes: ['']
      });
    }

  ngOnInit(): void {
    this.categories$ = this.categoryService.get();
  }

  onSubmit() {

    this.transactionService.get().subscribe(response => {
      const transactions = response;
      const id = transactions.length + 1;

      const transaction: Transaction = {
        id: id,
        type: 'expense',
        date: new Date(this.transactionForm.value.date).toDateString(),
        title: this.transactionForm.value.title,
        category: '',
        amount: this.transactionForm.value.amount,
        notes: '',
      };

      this.transactionService.post(transaction).subscribe();
    });
  }
}
