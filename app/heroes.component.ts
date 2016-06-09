import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
  directives: [<any>HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  hero:Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes:Hero[];
  selectedHero:Hero;
  addingHero: boolean;
  error: any;

  constructor(private router:Router,
              private heroService:HeroService) {

  }

  addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }

  delete(hero: Hero, event: any) {
    event.stopPropagation();
    this.heroService.delete(hero)
      .then(
        res => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) {
            this.selectedHero = null;
          }
        }
      ).catch(
        error => this.error = error // TODO: Display error message
      )
  }
  
  close(savedHero: Hero) {
    this.addingHero = false;
    if (savedHero) {
      this.getHeroes();
    }
  }
  
  getHeroes() {
    this.heroService.getHeroes().then(
      (heroes) => this.heroes = heroes
    );
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero:Hero) {
    this.selectedHero = hero;
  }

  gotoDetail() {
    this.router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
  }
}