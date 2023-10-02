import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SupplierComponent } from './suppliers/supplier/supplier.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductComponent } from './products/product/product.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsService } from './products/products.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './products/edit-product/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductResolver } from './products/product/product-resolver.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    SuppliersComponent,
    SupplierComponent,
    EditProductComponent,
    ProductComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [
    ProductsService, 
    AuthGuard, 
    AuthService, 
    CanDeactivateGuard,
    ProductResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
