import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Import routes directly
// console.m('Bootstrapping application with routes:', routes);
console.log('run main.ts');
bootstrapApplication(AppComponent, {
      providers: [        
        provideRouter(routes), // Pass routes directly
      ],
    }).catch((err) => console.error(err));