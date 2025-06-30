import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.html'
})
export class DragonballPage {

  characters = signal<Character[]>([
    { id: 1, name: 'Gokú', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Piccolo', power: 7500 },
    { id: 4, name: 'Gohan', power: 6500 },
  ]);

}
