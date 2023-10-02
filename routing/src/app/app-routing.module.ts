import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ProductComponent } from "./products/product/product.component";
import { EditProductComponent } from "./products/edit-product/edit-product.component";
import { SuppliersComponent } from "./suppliers/suppliers.component";
import { SupplierComponent } from "./suppliers/supplier/supplier.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./products/edit-product/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ProductResolver } from "./products/product/product-resolver.service";

const routes: Routes = [
    { path: '', component: HomeComponent},
    {
      path: 'produtos', 
      // canActivate: [AuthGuard], 
      canActivateChild: [AuthGuard],
      component: ProductsComponent, 
      children: [
        { path: ':id', component: ProductComponent, resolve: { product: ProductResolver }},
        { path: ':id/editar', component: EditProductComponent, canDeactivate: [CanDeactivateGuard]},
      ]
    },
    { 
      path: 'fornecedores', 
      component: SuppliersComponent, 
      children: [
        { path: ':id/:name', component: SupplierComponent},
      ]
    },
    // { path: 'pagina-nao-encontrada', component: PageNotFoundComponent},
    { path: 'pagina-nao-encontrada', component: ErrorPageComponent, data: { message: 'Página não encontrada.'}},
    { path: '**', redirectTo: '/pagina-nao-encontrada'}
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

    
}