import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './home/products/products.component';
import { InventoryComponent } from './home/inventory/inventory.component';
import { SupplierComponent } from './home/supplier/supplier.component';
import { AddSupplierComponent } from './home/add-supplier/add-supplier.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"inventory",component:InventoryComponent},
  {path:"suppliers",component:SupplierComponent},
  {path:"addsuppliers",component:AddSupplierComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
