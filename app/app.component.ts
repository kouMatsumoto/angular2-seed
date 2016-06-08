import {Component} from '@angular/core';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {DashboardComponent} from "./dashboard.component";

@Component({
  selector: 'my-app',
  directives: [
    ROUTER_DIRECTIVES,
  ],
  providers: [
    ROUTER_PROVIDERS,
    HeroService
  ],
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: <any>HeroesComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  }
])
export class AppComponent {
  title = 'Tour of Heroes';
}