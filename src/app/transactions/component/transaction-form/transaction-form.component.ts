import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Category } from '../../../shared/models/category.model';
import { Transaction } from '../../../shared/models/transaction.model';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit, OnChanges {
  @Input()
  categories: Category[] | null = [];

  @Input()
  transaction: Transaction | null = null;

  @Input()
  type: 'expense' | 'income' = 'expense';

  @Output()
  create = new EventEmitter<Transaction>();

  @Output()
  cancel = new EventEmitter<Transaction>();

  form: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [Guid.raw()],
      type: this.type,
      date: [new Date().toISOString()],
      title: [''],
      category: [''],
      amount: ['0.00'],
      notes: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges): void {    
    if (changes.transaction && changes.transaction.currentValue && !changes.transaction.firstChange)
      this.form.patchValue(changes.transaction.currentValue);
  }

  onSave() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
