import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routes';
// import { ProductService } from '../product.service';
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl?: string; // Imagen opcional
}
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  imports: [ReactiveFormsModule,CommonModule,AppRoutingModule]
})
export class AddProductComponent implements OnInit {

  addProductForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.addProductForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl(null, [Validators.required, Validators.min(0.01)])
    });
  }

  onSubmit(): void {
    if (this.addProductForm.valid) {
      const newProduct: Product = {
        id: Math.floor(Math.random() * 1000) + 1, // Simulación de ID
        name: this.addProductForm.value.name,
        description: this.addProductForm.value.description,
        price: this.addProductForm.value.price
      };
      // this.productService.addProduct(newProduct);
      this.addProductForm.reset();
      alert('Producto añadido con éxito!');
    }
  }

}