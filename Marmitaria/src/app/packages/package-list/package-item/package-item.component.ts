import { Component, Input, OnInit } from '@angular/core';
import { Package } from '../../package.model';
import { PackagesService } from '../../packages.service';

@Component({
  selector: 'app-package-item',
  templateUrl: './package-item.component.html',
  styleUrls: ['./package-item.component.css']
})
export class PackageItemComponent  implements OnInit {

  @Input() package!: Package;


  constructor(private packageService: PackagesService) { }

  ngOnInit(): void {
      
  }

  onSelected(){
    this.packageService.packageSelected.emit(this.package);
  }
  
}
