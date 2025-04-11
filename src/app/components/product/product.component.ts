import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  imports: [CommonModule]
})
export class ProductComponent {

  products = [
    {name: 'Angular shirt', price: 89.90},
    {name: 'TypeScript mug', price: 39.90},
    {name: 'Gaming mouse', price: 139.90}
  ];

}
