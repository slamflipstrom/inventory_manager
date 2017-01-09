import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  products: ProductModel[];

  constructor() {
    this.products = [
      {
        sku: 'HAT',
        name: 'Black Hat',
        imageUrl: '../assets/images/black-hat.jpeg',
        department: ['Men', 'Accessories', 'Hat'],
        price: 29.99
      },
      {
        sku: 'JACKET',
        name: 'Red Jacket',
        imageUrl: '../assets/images/red-jacket.jpeg',
        department: ['Women', 'Jackets', 'Rain Jackets'],
        price: 179.99
      },
      {
        sku: 'BOOTS',
        name: 'Brown Hiking Boots',
        imageUrl: '../assets/images/brown-boots.jpg',
        department: ['Men', 'Boots', 'Hiking'],
        price: 109.99
      }
    ];
  }

  productWasSelected(product: ProductModel): void {
    console.log('Product clicked: ', product);
  }

}

export interface ProductModel {
    sku: string;
    name: string;
    imageUrl: string;
    department: string[];
    price: number;
};
