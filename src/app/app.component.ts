import { Component, OnInit, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from "./product-card/product-card.component";
import { CommonModule, NgIfContext } from '@angular/common';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

console.log('--- app.component.ts');

import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from "./add-product/add-product.component"; // <-- Importa este módulo
// import { AddProductComponent } from "./add-product/add-product.component"; // Asegúrate de que la ruta sea correcta
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { AppRoutingModule } from './app.routes';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, ReactiveFormsModule, AddProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent implements OnInit{
  alertMessage = '¡Bienvenido a la tienda de productos electrónicos!';
  
  title = 'e-commerce';
  products = [
    {
      id: 1,
      name: 'Smartwatch V1',
      description: 'Un reloj inteligente con todas las funciones.',
      price: 199.99,
      imageUrl: 'https://ae01.alicdn.com/kf/S29d7ecb5cace47d8ab9332b67cf9a8430.jpg'
    },
    {
      id: 2,
      name: 'Auriculares Inalámbricos',
      description: 'Sonido de alta calidad, sin cables.',
      price: 79.50,
      imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689003505-51KS2bIVX5L.jpg?crop=1xw:1xh;center,top&resize=980:*'
    },
    {
      id: 3,
      name: 'Cámara Instantánea',
      description: 'Captura momentos y imprímelos al instante.',
      price: 120.00,
      imageUrl: 'https://asset.fujifilm.com/www/bo/files/styles/600x400/public/2025-07/d49c51ca345cb9b80936c5ab9c227904/thumb_instaxcameras_16.png?itok=-zEtnmBu'
    },
    {
      id: 4,
      name: 'Laptop Ultradelgada',
      description: 'Potente y ligera, ideal para el trabajo y el estudio.',
      price: 999.00,
      imageUrl: 'https://latinpyme.com/wp-content/uploads/2023/10/imagen_2023-10-12_110533879.webp'
    },
    {
      id: 5,
      name: 'Altavoz Bluetooth',
      description: 'Música en cualquier lugar, con gran potencia.',
      price: 55.00,
      imageUrl: 'https://sony.scene7.com/is/image/sonyglobalsolutions/Wireless_portable-speakers_714x439_v2?$productFinder$'
    },
    {
      id: 6,
      name: 'Consola de Videojuegos',
      description: 'La última generación para una experiencia inmersiva.',
      price: 499.00,
      imageUrl: 'https://i.blogs.es/f16b7c/xbox-ps5-nintendo-switch/1366_2000.jpeg'
    }
  ];
  addProductForm: any;

  constructor() { }
  searchProducts(term: string): Observable<Product[]> { 
    if (!term.trim()) { 
      return of([]); // Retorna un array vacío si el término está vacío 
    } 
    const lowerCaseTerm = term.toLowerCase(); 
    const filteredProducts = this.products.filter(product => 
      product.name.toLowerCase().includes(lowerCaseTerm) || 
      product.description.toLowerCase().includes(lowerCaseTerm) 
    ); 
    return of(filteredProducts); 
  } 
  ngOnInit(): void { };
  // Método para añadir un nuevo producto
  onSubmit(): void {
    if (this.addProductForm.valid) {
      const newProduct: Product = {
        id: this.products.length + 1, // Asignamos un ID simple
        name: this.addProductForm.value.name,
        description: this.addProductForm.value.description,
        price: this.addProductForm.value.price,
        imageUrl: this.addProductForm.value.imageUrl || 'https://via.placeholder.com/150' // Imagen por defecto si no se proporciona
      };
      this.products.push(newProduct);
      this.addProductForm.reset();
      alert('Producto añadido con éxito!');
    }
  }
  isUrlProducts(): boolean {
    return window.location.href.includes('products');
  }
}