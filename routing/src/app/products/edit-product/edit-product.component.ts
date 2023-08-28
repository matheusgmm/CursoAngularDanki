import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  product?: {id: number, name: string, status: string};
  productName = '';
  productStatus = '';

}
