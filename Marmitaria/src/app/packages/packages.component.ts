import { Component, OnDestroy, OnInit } from '@angular/core';
import { Package } from './package.model';
import { PackagesService } from './packages.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css'],
  providers: [ PackagesService ]
})
export class PackagesComponent implements OnInit, OnDestroy  {

  selectedPackage!: Package;
  subscription: Subscription =  new Subscription();

  constructor(private packageService: PackagesService) { }


  ngOnInit(): void {
    this.subscription = this.packageService.packageSelected.subscribe((selectedPackage: Package) => {
      this.selectedPackage = selectedPackage;
    })
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
