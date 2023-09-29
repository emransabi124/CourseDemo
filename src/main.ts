import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// bootstrapModule :to start app.module=>App.Component
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
