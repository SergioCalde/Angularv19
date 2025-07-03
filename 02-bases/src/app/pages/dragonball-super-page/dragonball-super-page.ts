import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list';
import { Character } from '../../interfaces/character';
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.html'
})
export class DragonballSuperPage {

  // Previous way to inject the service
  // constructor( private dragonballService: DragonballService ) {}

  public dragonballService = inject(DragonballService);

  characters = this.dragonballService.characters;

  addCharacter(character: Character) {
    this.dragonballService.addCharacter(character);
  }

}
