import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PackagesComponent } from "./packages/packages.component";
import { FoodListComponent } from "./food-list/food-list.component";
import { PackagesDefaultComponent } from "./packages/packages-default/packages-default.component";
import { PackageDetailsComponent } from "./packages/package-details/package-details.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/marmitas', pathMatch: 'full' },
    { path: 'marmitas', component: PackagesComponent, children: [
        { path: '', component: PackagesDefaultComponent },
        { path: ':id', component: PackageDetailsComponent }
    ] },
    { path: 'alimentos', component: FoodListComponent },

]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}