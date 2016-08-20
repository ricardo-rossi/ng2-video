import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment, VideoComponent } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(VideoComponent);
