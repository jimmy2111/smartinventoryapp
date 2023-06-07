import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupplierService } from 'src/app/supplier.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
suppliers:any;
name='';
unitPrice='';
description='';
quantity:number=0;
thresholdQuantity:number=0;
id:number=0;
successMessage : string='';
errorMessage:string='';
constructor(private supplierService: SupplierService, private http : HttpClient,private router : Router){
  this.suppliers=supplierService.getSupplier().subscribe(data=>this.suppliers=data);
}
saveProduct(){
  const formData = new FormData();
  formData.append('name',this.name);
  formData.append('unitPrice',this.unitPrice);
  formData.append('description',this.description);
  formData.append('quantity',this.quantity.toString());
  formData.append('thresholdQuantity', this.thresholdQuantity.toString());
  formData.append('id',this.id.toString());
  const param = new HttpParams().set('id',this.id).set('product',formData.set.toString());

  this.http.post("https://smartinventorytest.azurewebsites.net/addproduct",formData ,{ responseType: 'text' }).subscribe(
    (response:any)=>{
      
       console.log("response")
      this.successMessage=response;
      console.log(response);
      this.errorMessage='';
      this.resetForm();
      this.router.navigate(['/addproducts'])
    },
    (error:any)=>{
      this.errorMessage=error.error;
      this.successMessage='';
      this.resetForm();
      console.log(error);
    });
}
resetForm(){
  this.name='';
  this.unitPrice='';
  this.description='';
  this.quantity=0;
  this.thresholdQuantity=0;
  this.id=0;
}
goToAddProductPage(){
  this.router.navigate(["/add-product"]);
}
}
