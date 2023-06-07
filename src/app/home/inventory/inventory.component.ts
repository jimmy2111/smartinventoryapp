import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit{
ngOnInit(): void {
  this.getInventory();
}
inventory:any;
pageNo=0;
pageSize=5;
sortField='id';
sortOrder='asc';
isDisabled = true;
isDisabled2 = false;
name='';
constructor(private inventoryService: InventoryService){}
getInventory(){
this.inventoryService.getInventory(this.pageNo,this.pageSize,this.sortField,this.sortOrder).subscribe(data=>this.inventory=data);
}
onName(){
  this.sortField='product.name';
  this.sortOrder=this.sortOrder.match("asc")?"desc":"asc";
  this.getInventory();
}
onQuantity(){
  this.sortField="quantity";
  this.sortOrder=this.sortOrder.match("asc")?"desc":"asc";
  this.getInventory();
}
onThresholdQuantity(){
  this.sortField="threshold";
  this.sortOrder=this.sortOrder.match("asc")?"desc":"asc";
  this.getInventory();
}
nextPage(){
  this.pageNo++;
  this.isDisabled=false;
  this.getInventory();
}
previousPage(){
  if(this.pageNo>0){
    this.pageNo--;
    this.getInventory();
  }
  if(this.pageNo==0){
    this.isDisabled=true;
  }
}
searchInventory(){
this.inventoryService.searchInventory(this.name,this.pageNo,this.pageSize,this.sortField,this.sortOrder).subscribe(data=>this.inventory=data);
}
}
