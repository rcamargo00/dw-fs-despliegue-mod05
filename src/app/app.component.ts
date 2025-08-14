import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from "./product-card/product-card.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'e-commerce';
  products = [
    {
      name: 'Smartwatch V1',
      description: 'Un reloj inteligente con todas las funciones.',
      price: 199.99,
      imageUrl: 'https://ae01.alicdn.com/kf/S29d7ecb5cace47d8ab9332b67cf9a8430.jpg'
    },
    {
      name: 'Auriculares Inalámbricos',
      description: 'Sonido de alta calidad, sin cables.',
      price: 79.50,
      imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689003505-51KS2bIVX5L.jpg?crop=1xw:1xh;center,top&resize=980:*'
    },
    {
      name: 'Cámara Instantánea',
      description: 'Captura momentos y imprímelos al instante.',
      price: 120.00,
      imageUrl: 'https://asset.fujifilm.com/www/bo/files/styles/600x400/public/2025-07/d49c51ca345cb9b80936c5ab9c227904/thumb_instaxcameras_16.png?itok=-zEtnmBu'
    },
    {
      name: 'Laptop Ultradelgada',
      description: 'Potente y ligera, ideal para el trabajo y el estudio.',
      price: 999.00,
      imageUrl: 'https://latinpyme.com/wp-content/uploads/2023/10/imagen_2023-10-12_110533879.webp'
    },
    {
      name: 'Altavoz Bluetooth',
      description: 'Música en cualquier lugar, con gran potencia.',
      price: 55.00,
      imageUrl: 'https://sony.scene7.com/is/image/sonyglobalsolutions/Wireless_portable-speakers_714x439_v2?$productFinder$'
    },
    {
      name: 'Consola de Videojuegos',
      description: 'La última generación para una experiencia inmersiva.',
      price: 499.00,
      imageUrl: 'https://i.blogs.es/f16b7c/xbox-ps5-nintendo-switch/1366_2000.jpeg'
    }
  ];
  constructor() { }
  ngOnInit(): void { }
}