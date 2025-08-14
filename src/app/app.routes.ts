import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ProductCardComponent } from './product-card/product-card.component';
// import { AddProductComponent } from './add-product/add-product.component';
// import { AppComponent } from './app.component';

export const routes: Routes = [
  // Ruta para la página principal del e-commerce.
  // Es la que muestra la lista de productos.
  // { path: 'products', component: AppComponent },    
  { path: 'products', loadComponent: () => import('./app.component').then(m => m.AppComponent) },
  { path: 'add-product', loadComponent: () => import('./add-product/add-product.component').then(m => m.AddProductComponent) },
  // { path: 'add-product', component: AddProductComponent   },    
  // Y una ruta de "fallback" para manejar URLs no encontradas.
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
