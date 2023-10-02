import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PackagesComponent } from './packages/packages.component';
import { PackageListComponent } from './packages/package-list/package-list.component';
import { PackageDetailsComponent } from './packages/package-details/package-details.component';
import { PackageItemComponent } from './packages/package-list/package-item/package-item.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodEditComponent } from './food-list/food-edit/food-edit.component';
import DropdownDirective from './shared/dropdown.directive';
import { FoodListService } from './food-list/food-list.service';
import { AppRoutingModule } from './app-routing.module';
import { PackagesDefaultComponent } from './packages/packages-default/packages-default.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PackagesComponent,
    PackageListComponent,
    PackageDetailsComponent,
    PackageItemComponent,
    FoodListComponent,
    FoodEditComponent,
    DropdownDirective,
    PackagesDefaultComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FoodListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
