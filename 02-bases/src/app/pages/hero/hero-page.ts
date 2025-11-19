import { Component, computed, signal } from "@angular/core";
import { UpperCasePipe } from "@angular/common";



@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.html',
  imports: [ UpperCasePipe ],
})
export class HeroPage {
  name = signal('Ironman');
  age = signal(45);
  heroDescription = computed( () => `${ this.name() } - ${ this.age() }` );
  capitalizedName = computed( () => this.name().toUpperCase() );

  // getHeroDescription() {
  //   return `${ this.name() } - ${ this.age() }`;
  // }

  changeHero() {
    this.name.update( ( current ) => current === 'Ironman' ? 'Spiderman' : 'Ironman' );
    this.age.update( ( current ) => current === 45 ? 22 : 45 );
  }

  changeAge() {
    this.age.set(60);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

}
