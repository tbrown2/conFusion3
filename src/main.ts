import { enableProdMode } from '@angular/core';
//enables you to bootstrap your angular application by taking your root module as a parameter
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//app module is the root module to the angular hierarchy
platformBrowserDynamic().bootstrapModule(AppModule);
