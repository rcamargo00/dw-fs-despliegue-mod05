import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  // Ruta para la página principal del e-commerce.
  // Es la que muestra la lista de productos.
  { path: '', component: AppComponent },  
  // Puedes agregar más rutas, por ejemplo, para el carrito de compras:
  // { path: 'carrito', component: CarritoComponent },
  
  // Y una ruta de "fallback" para manejar URLs no encontradas.
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
