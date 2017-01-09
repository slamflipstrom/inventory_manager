import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../app.component';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent {
  @Input() productList: ProductModel[];
  @Output() onProductSelected: EventEmitter<any>;

  private currentProduct: ProductModel;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: ProductModel) {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: ProductModel) {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku ===this.currentProduct.sku;
  }

}
