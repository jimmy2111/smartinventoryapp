import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent {
  name:string='';
  address:string='';
  contact:string='';
  constructor(private http: HttpClient){}

  saveSupplier(){
    const params = new HttpParams()
    .set('name', this.name)
    .set('address',this.address)
    .set('contact', this.contact);
    this.http.post("https://smartinventorytest.azurewebsites.net/addsupplier",params).subscribe(data=>console.log(data));
  }
}
