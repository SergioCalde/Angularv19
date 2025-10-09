import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from "../../pipes/can-fly.pipe";
import { HeroColorPipe } from "../../pipes/hero-color.pipe";
import { HeroTextColorPipe } from "../../pipes/hero-text-color.pipe";
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from "../../pipes/hero-creator.pipe";

@Component({
  selector: 'app-custom-page',
  imports: [
    TitleCasePipe,
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    HeroCreatorPipe
],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent { 

  name = signal('Sergio Calderon');

  upperCase = signal(true);

  heroes = signal(heroes);

  toggleCase(){
    this.upperCase.update(  value => !value );
  }

}
