import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url: string = 'http://localhost:3000/categories';

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.url);
  }

  post(resource: Category) {
    return this.httpClient.post<Category>(this.url, resource);
  }
}
