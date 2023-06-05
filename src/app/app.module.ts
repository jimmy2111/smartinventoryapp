import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './home/products/products.component';
import { InventoryComponent } from './home/inventory/inventory.component';
import { FormsModule } from '@angular/forms';
import { SupplierComponent } from './home/supplier/supplier.component';
import { AddSupplierComponent } from './home/add-supplier/add-supplier.component';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    InventoryComponent,
    SupplierComponent,
    AddSupplierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    OAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
