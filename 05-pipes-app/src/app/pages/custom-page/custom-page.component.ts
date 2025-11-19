import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from "../../pipes/can-fly.pipe";
import { HeroColorPipe } from "../../pipes/hero-color.pipe";
import { HeroTextColorPipe } from "../../pipes/hero-text-color.pipe";
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from "../../pipes/hero-creator.pipe";
import { HeroSortByPipe } from "../../pipes/hero-sort-by.pipe";
import { Hero, sortHeroBy } from '../../interfaces/hero.interface';
import { NamePipe } from "../../pipes/hero-filter.pipe";

@Component({
  selector: 'app-custom-page',
  imports: [
    TitleCasePipe,
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    HeroCreatorPipe,
    HeroSortByPipe,
    NamePipe
],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent { 

  name = signal('Sergio Calderon');

  upperCase = signal(true);

  heroes = signal(heroes);

  sortBy = signal<sortHeroBy | null>(null);

  sortHeroBy = sortHeroBy;

  searchQuery = signal('');

  toggleCase(){
    this.upperCase.update(  value => !value );
  }

  toggleSortBy( field: sortHeroBy ){

    console.log('toggleSortBy', field);
    const current = this.sortBy();

    const toggleMap: Record<sortHeroBy, sortHeroBy> | null= {
      [sortHeroBy.name]: sortHeroBy.nameDesc,
      [sortHeroBy.nameDesc]: sortHeroBy.name,
      [sortHeroBy.canFly]: sortHeroBy.canFlyDesc,
      [sortHeroBy.canFlyDesc]: sortHeroBy.canFly,
      [sortHeroBy.color]: sortHeroBy.colorDesc,
      [sortHeroBy.colorDesc]: sortHeroBy.color,
      [sortHeroBy.creator]: sortHeroBy.creatorDesc,
      [sortHeroBy.creatorDesc]: sortHeroBy.creator,
    };

    const isSameField = current === field || current === toggleMap[field];
    const nextSort = isSameField ? toggleMap[current] : field;

    this.sortBy.set(nextSort);

  }

}
