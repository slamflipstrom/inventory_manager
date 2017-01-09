import { Component, Input } from '@angular/core';

import { ProductModel } from '../app.component';

@Component({
  selector: 'product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css']
})
export class ProductDepartmentComponent {
  @Input() product: ProductModel;

  constructor() { }

}
