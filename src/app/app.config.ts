import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule here

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(RouterModule),  // Ensure RouterModule is included
    provideRouter(routes)  // Provide router configuration
  ]
};
