import { Component, input, signal } from '@angular/core';
import { Character } from '../../../interfaces/character';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.html',
})
export class CharacterAddComponent {

  characters = input.required<Character[]>();
  name = signal<string>('');
  power = signal<number>(0);


  addCharacter() {

      if( !this.name() || !this.power() || this.power() <= 0 ) return;

      const newCharacter: Character = {
        id: this.characters().length + 1,
        name: this.name(),
        power: this.power(),
      };

      console.log({ newCharacter });

      this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }

}
