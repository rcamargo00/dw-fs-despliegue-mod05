import { RenderMode, ServerRoute } from '@angular/ssr';
import { AddProductComponent } from './add-product/add-product.component';
import { AppComponent } from './app.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',    
    renderMode: RenderMode.Prerender
  }
];
