// Imports for loading & configuring the in-memory web api
import {provide} from '@angular/core';
import {XHRBackend} from '@angular/http';
import {InMemoryBackendService, SEED_DATA} from 'angular2-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

// The usual bootstrapping imports
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './app.component';

bootstrap(<any>AppComponent, [
  HTTP_PROVIDERS,
  provide(XHRBackend, { useClass: <any>InMemoryBackendService}), // in-mem server
  provide(SEED_DATA, { useClass: <any>InMemoryDataService }) // in-mem server data
]);
