import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AlbumList } from './app/album-list/album-list';

bootstrapApplication(AlbumList, appConfig)
  .catch((err) => console.error(err));
