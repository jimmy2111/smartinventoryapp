import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './home/products/products.component';
import { InventoryComponent } from './home/inventory/inventory.component';
import { SupplierComponent } from './home/supplier/supplier.component';
import { AddSupplierComponent } from './home/add-supplier/add-supplier.component';
import { AddProductComponent } from './home/add-product/add-product.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"inventory",component:InventoryComponent},
  {path:"suppliers",component:SupplierComponent},
  {path:"addsuppliers",component:AddSupplierComponent},
  {path:"addproducts", component:AddProductComponent},
  {path:"add-product",component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
