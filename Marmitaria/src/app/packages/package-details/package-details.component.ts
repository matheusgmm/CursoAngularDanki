import { Component, Input, OnInit } from '@angular/core';
import { Package } from '../package.model';
import { PackagesService } from '../packages.service';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css']
})
export class PackageDetailsComponent implements OnInit  {
  
  @Input() packageSelected!: Package;

  constructor(private packageService: PackagesService) { }

  ngOnInit(): void {
      
  }

  addToFoodList() {
    this.packageService.addIngredientsToFoodList(this.packageSelected.ingredients);
  }

}
