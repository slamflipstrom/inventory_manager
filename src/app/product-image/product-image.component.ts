import { Component, Input } from '@angular/core';

import { ProductModel } from '../app.component';

@Component({
  selector: 'product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent {
  @Input() product: ProductModel;

  // product: ProductModel;

  constructor() { }

}
