import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from 'src/app/product.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products:any;
  pageNo = 0;
  pageSize = 4;
  sortField = 'name';
  sortOrder = 'asc';
  isDisabled = true;
  isDisabled2 = false;
  totalPages:number | undefined;
  name="";
  constructor(private productService : ProductService,private http:HttpClient){
    //this.products=productService.getProducts().subscribe(data=>this.products=data);
  }
  ngOnInit(): void {
    this.getProducts();
  }
  searchProduct(){
    this.productService.searchProduct(this.name,this.pageNo,this.pageSize,this.sortField,this.sortOrder).subscribe(data=>this.products=data)
  }
  getProducts(){
    this.productService.getProducts(this.pageNo,this.pageSize,this.sortField,this.sortOrder)
    .subscribe(data=>this.products=data);
  }
  nextPage(){
    this.pageNo++;
    this.isDisabled=false;
    this.getProducts();
  }
  previousPage(){
    if(this.pageNo>0){
      this.pageNo--;
      this.getProducts();
    }
    if(this.pageNo==0){
      this.isDisabled=true;
    }
  }
  onName(){
    this.sortField="name";
    this.sortOrder=this.sortOrder.match("asc")?"desc":"asc";
    this.getProducts();
  }
  onDescription(){
    this.sortField="description";
    this.sortOrder=this.sortOrder.match("asc")?"desc":"asc";
    this.getProducts();
  }
  onUnitPrice(){
    this.sortField="unitPrice";
    this.sortOrder=this.sortOrder.match("asc")?"desc":"asc";
    this.getProducts();
  }
  onQuantity(){
    this.sortField="quantity";
    this.sortOrder=this.sortOrder.match("asc")?"desc":"asc";
    this.getProducts();
  }
  onThresholdQuantity(){
    this.sortField="thresholdQuantity";
    this.sortOrder=this.sortOrder.match("asc")?"desc":"asc";
    this.getProducts();
  }
}
