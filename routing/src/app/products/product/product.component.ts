import { Component, OnInit } from '@angular/core';
import { IProduct, ProductsService } from '../products.service';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  public product?: IProduct;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.route.data.subscribe(
      (data: Data) => this.product = data['product']
    )

    // const id = +this.route.snapshot.params['id'];  // + na frente para converter para number
    // this.product = this.productsService.getProduct(id);

    // this.route.params.subscribe((params) => {
    //   this.product = this.productsService.getProduct(+params['id'])
    // });
    
  }

  onEdit(): void {
    this.router.navigate(['editar'], { relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}