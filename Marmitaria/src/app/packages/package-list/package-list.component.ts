import { Component, OnInit } from '@angular/core';
import { Package } from '../package.model';
import { PackagesService } from '../packages.service';


@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  packages: Package[] = [];

  constructor(private packageService: PackagesService) { }

  ngOnInit(): void {
    this.packages = this.packageService.getPackages();
  }

    
}
