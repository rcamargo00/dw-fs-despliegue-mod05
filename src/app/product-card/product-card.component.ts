import { Component, Input } from '@angular/core';
console.log('--- product-card.component.ts');
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: any;
}
