import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../_model/product-model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getById(id: string): Observable<Product> {
    return this.http.get<Product>('http://localhost:8080/api/product/' + id, {observe: 'body'});
  }
}
