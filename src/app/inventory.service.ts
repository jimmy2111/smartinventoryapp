import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private baseUrl="https://smartinventorytest.azurewebsites.net";
  constructor(private http : HttpClient) { }

  getInventory(pageNo: number, pageSize: number, sortField: string, sortOrder: string){
    const params = new HttpParams()
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString())
      .set('sortField', sortField)
      .set('sortOrder', sortOrder);
      return this.http.get(`${this.baseUrl}/viewinventory`,{params});
}
searchInventory(name:string,pageNo: number, pageSize: number, sortField: string, sortOrder: string){
  const params = new HttpParams()
      .set('name',name)
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString())
      .set('sortField', sortField)
      .set('sortOrder', sortOrder);
      return this.http.post(`${this.baseUrl}/searchforinventory`,params);
}
}
