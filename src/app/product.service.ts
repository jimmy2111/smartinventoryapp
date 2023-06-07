import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './home/products/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl="https://smartinventorytest.azurewebsites.net";
  constructor(private http : HttpClient) { }

  getProducts(pageNo: number, pageSize: number, sortField: string, sortOrder: string){
    const params = new HttpParams()
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString())
      .set('sortField', sortField)
      .set('sortOrder', sortOrder);
      return this.http.get(`${this.baseUrl}/viewproducts`,{params});
}
searchProduct(name:string,pageNo: number, pageSize: number, sortField: string, sortOrder: string){
  const params = new HttpParams()
      .set('name',name)
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString())
      .set('sortField', sortField)
      .set('sortOrder', sortOrder);
      return this.http.post(`${this.baseUrl}/searchforproduct`,params);
}
}
