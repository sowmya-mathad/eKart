import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, NgStyle, NgIf, SearchComponent, FilterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Minimalists Analog watch', price: '109', color: 'Black', available: 'Available', image: '../products/product-image-1.jpeg' },
    { id: 2, name: 'Hisense Ultra HD Smart TV', price: '3339', color: 'Black', available: 'Available', image: '../products/product-image-2.jpeg' },
    { id: 3, name: 'APPLE iPhone 12', price: '1855', color: 'Black', available: 'Not Available', image: '../products/product-image-3.jpeg' },
    { id: 4, name: 'LG Fully Automatic Washing Machine', price: '1765', color: 'white', available: 'Available', image: '../products/product-image-4.jpeg' },
    { id: 5, name: 'LG Refrigerator with Door Cooling, price: 2815', color: 'white', available: 'Not Available', image: '../products/product-image-5.jpeg' },
    { id: 6, name: 'DELL Inspiron One 27 Ryzen 7', price: '2145', color: 'White', available: 'Available', image: '../products/product-image-6.jpeg' }
  ];

  getTotalProducts() {
    return this.products.length;
  }

  getTotalAvailableProducts() {
    return this.products.filter(product => product.available === 'Available').length;
  }

  getTotalNotAvailableProducts() {
    return this.products.filter(product => product.available != 'Available').length;
  }

  productCountRadioButton: string = 'All';

  onFilterRadioButtonChanged(data: string) {
    this.productCountRadioButton = data;
    // console.log( this.productCountRadioButton);
  }

}
