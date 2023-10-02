import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { IProduct, ProductsService } from "../products.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";


@Injectable()

export class ProductResolver implements Resolve<IProduct> {

    constructor(private productsService: ProductsService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): IProduct | Observable<IProduct> | Promise<IProduct> {
            return this.productsService.getProduct(+route.params['id']);
    }

}