import { Pipe, type PipeTransform } from '@angular/core';
import { Hero, sortHeroBy } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroSortBy',
})
export class HeroSortByPipe implements PipeTransform {

  transform(value: Hero[], sortBy: sortHeroBy | null): Hero[] {
    
    if (!sortBy) return value;

    switch (sortBy) {
      case 'name':
        return value.sort((a, b) => a.name.localeCompare(b.name));
      case 'nameDesc':
        return value.sort((b, a) => a.name.localeCompare(b.name));
      case 'canFly':
        return value.sort((a, b) => a.canFly ? -1 : 1);
      case 'canFlyDesc':
        return value.sort((a, b) => a.canFly ? 1 : -1);
      case 'color':
        return value.sort((a, b) => a.color - b.color);
      case 'colorDesc':
        return value.sort((a, b) => b.color - a.color);
      case 'creator':
        return value.sort((a, b) => a.creator - b.creator);
      case 'creatorDesc':
        return value.sort((a, b) => -b.creator - a.creator);
      default:
        return value;
    }
  }

}
