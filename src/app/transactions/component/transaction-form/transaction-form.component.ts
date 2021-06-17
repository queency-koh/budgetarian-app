import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Category } from '../../shared/models/category.model';
import { Transaction } from '../../shared/models/transaction.model';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent {

  @Input()
  categories: Category[] | null = [];

  @Input()
  form: any

  @Output()
  create = new EventEmitter<Transaction>();

  @Output()
  cancel = new EventEmitter<Transaction>();

  onSave() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
