import { Component, Inject, OnInit } from '@angular/core'; 
import { FormControl } from '@angular/forms'; 
// Update the import path below to the correct location of product.service.ts
// import { ProductService } from '../product.service'; // Example: adjust as needed
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'; 
import { Observable } from 'rxjs'; 


@Component({ 
  selector: 'app-find-product', 
  templateUrl: './find-product.component.html', 
  styleUrls: ['./find-product.component.css'] 
}) 
// export class ProductSearchComponent implements OnInit { 
export class FindProductComponent implements OnInit { 
  searchControl = new FormControl(''); 
  
  constructor() { } 
  // constructor(private productService: ProductService) { } 

  ngOnInit(): void { 
    this.searchControl.valueChanges.pipe( 
      debounceTime(400), // Espera 400ms después de la última pulsación 
      distinctUntilChanged() // Emite solo si el valor ha cambiado 
    ).subscribe(searchTerm => { 
      this.searchProducts(searchTerm); 
    }); 
  } 

  searchProducts(term: string | null): void { 
    if (term && term.length > 2) { // Búsqueda solo si hay al menos 3 caracteres 
      // this.products$ = this.productService.searchProducts(term); 
    } else { 
      // this.products$ = null; 
    } 
  } 
}