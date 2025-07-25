import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Character } from '../../../interfaces/character';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.html',
})

export class CharacterListComponent {

  characters = input.required<Character[]>();

  listName = input.required<string>();


}
