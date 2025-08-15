import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ProductCardComponent } from './product-card/product-card.component';
// import { AddProductComponent } from './add-product/add-product.component';
// import { AppComponent } from './app.component';
console.log('--- app.routes.ts');
export const routes: Routes = [
  // Ruta para la página principal del e-commerce.
  // Es la que muestra la lista de productos.
  // { path: 'products', component: AppComponent },    
  // { path: 'add-product', component: AddProductComponent   },    
  { path: 'products', loadComponent: () => import('./app.component').then(m => m.AppComponent) },
  { path: 'add-product', loadComponent: () => import('./add-product/add-product.component').then(m => m.AddProductComponent) },
  
  // Y una ruta de "fallback" para manejar URLs no encontradas.
  { path: '**', redirectTo: 'browser' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
  static
    // { path: 'add-product', loadComponent: () => import('./add-product/add-product.component').then(m => m.AddProductComponent) },
    // Y una ruta de "fallback" para manejar URLs no encontradas.
    
    routes(routes: any): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
      throw new Error('Method not implemented.');
  }
}
