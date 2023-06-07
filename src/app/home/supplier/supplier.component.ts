import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  suppliers:any;
  pageNo = 0;
  pageSize = 4;
  sortField = 'name';
  sortOrder = 'desc';
  isDisabled = true;
  isDisabled2 = false;
  totalPages:number | undefined;
  name="";
  constructor(private supplierService: SupplierService){
    //this.products=productService.getProducts().subscribe(data=>this.products=data);
  }
  ngOnInit(): void {
    this.getSuppliers();
  }
  searchSupplier(){
    this.supplierService.searchSupplier(this.name,this.pageNo,this.pageSize,this.sortField,this.sortOrder).subscribe(data=>this.suppliers=data)
  }
  getSuppliers(){
    this.supplierService.getSuppliers(this.pageNo,this.pageSize,this.sortField,this.sortOrder)
    .subscribe(data=>this.suppliers=data);
  }
  nextPage(){
    this.pageNo++;
    this.isDisabled=false;
    this.getSuppliers;
  }
  previousPage(){
    if(this.pageNo>0){
      this.pageNo--;
      this.getSuppliers();
    }
    if(this.pageNo==0){
      this.isDisabled=true;
    }
  }
  onName(){
    this.sortField="name";
    this.sortOrder=this.sortOrder.match("asc")?"desc":"asc";
    this.getSuppliers();
  }
  onAddress(){
    this.sortField="address";
    this.sortOrder=this.sortOrder.match("asc")?"desc":"asc";
    this.getSuppliers();
  }
  onContact(){
    this.sortField="contact";
    this.sortOrder=this.sortOrder.match("asc")?"desc":"asc";
    this.getSuppliers();
  }
}
