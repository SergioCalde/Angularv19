import { Component, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list';
import { Character } from '../../interfaces/character';
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add";

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.html'
})
export class DragonballSuperPage {

  // name = signal('');
  // power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Gokú', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
  ]);


  // powerClasses = computed( () => {
  //   return {
  //     'text-danger': true,
  //   }
  // })

  addCharacter( character: Character ) {
    this.characters.update( (characters) => [...characters, character] );
  }

  //   if( !this.name() || !this.power() || this.power() <= 0 ) return;

  //   const newCharacter: Character = {
  //     id: this.characters().length + 1,
  //     name: this.name(),
  //     power: this.power(),
  //   };

  //   // Not recommended
  //   // this.characters().push(newCharacter);

  //   this.characters.update( (characters) => [...characters, newCharacter] );
  //   this.resetFields();
  // }

  // resetFields(){
  //   this.name.set('');
  //   this.power.set(0);
  // }

}
