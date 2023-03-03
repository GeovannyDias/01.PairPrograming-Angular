
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// import { enableProdMode } from '@angular/core'; // No se muestra en angular 15
// import { environment } from './environments/environment';

// No se muestra en angular 15

// the enableProdMode function call has been removed in main.ts. 
// It was only used for JiT mode, which is not really used anymore. 
// In AoT mode, the CLI already sets ngDevMode when building in 
// production mode, which has the same purpose.

// if (environment.production) { 
//   enableProdMode();
// }

// platformBrowserDynamic()...

// Con AOT, el compilador se ejecuta una vez en el tiempo de construcción utilizando un conjunto de bibliotecas.
// Con JIT se ejecuta cada vez para cada usuario en tiempo de ejecución utilizando un conjunto diferente de bibliotecas.
