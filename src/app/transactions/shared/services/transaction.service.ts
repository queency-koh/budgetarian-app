import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  url: string = 'http://localhost:3000/transactions';

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Transaction[]>{
    return this.httpClient.get<Transaction[]>(this.url);
  }

  post(resource: Transaction) {
    return this.httpClient.post<Transaction>(this.url, resource);
  }
}
