import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ProductModel } from '../app.component';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent {
  @Input() product: ProductModel;

  constructor() { }

}
