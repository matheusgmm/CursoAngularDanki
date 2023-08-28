import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SupplierComponent } from './suppliers/supplier/supplier.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductComponent } from './products/product/product.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'produtos', component: ProductsComponent},
  {path: 'fornecedores', component: SupplierComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    SuppliersComponent,
    SupplierComponent,
    EditProductComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
