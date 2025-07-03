import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character';

@Injectable({providedIn: 'root'})

export class DragonballService {

  characters = signal<Character[]>([
    { id: 1, name: 'Gokú', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
  ]);

  saveToLocalStorage = effect( () => {

    localStorage.setItem('characters', JSON.stringify(this.characters()))

  })

  addCharacter( character: Character ) {
    this.characters.update( (characters) => [...characters, character] );
  }

}
