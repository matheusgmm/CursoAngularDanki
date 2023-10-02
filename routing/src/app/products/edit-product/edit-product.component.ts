import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ICanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit, ICanComponentDeactivate {
  product?: { id: number; name: string; status: string };
  productName? = '';
  productStatus? = '';
  allowEdit: boolean = false;
  saved: boolean = false;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {

    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment);

    this.route.queryParams.subscribe(
      (params: Params) => {
        this.allowEdit = params['permiteEditar'] === '1';
      }
    );
    this.route.fragment.subscribe();

    this.product = this.productService.getProduct(1);
    this.productName = this.product?.name;
    this.productStatus = this.product?.status;
  }

  onUpdateProduct() {
    this.productService.updateProduct(
      this.product?.id, 
      {
        name: this.productName as string,
        status: this.productStatus as string,
      }
    );
    this.saved = true;
    this.router.navigate(['../', { relativeTo: this.route}]);
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if(!this.allowEdit) {
      return true
    }
    if((this.productName != this.product?.name || this.productStatus != this.product?.status) && !this.saved) {
      return confirm('Você gostaria de descartar as mudanças?');
    }
    return true;
  }
}
