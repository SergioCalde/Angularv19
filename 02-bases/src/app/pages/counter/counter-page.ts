import { Component } from "@angular/core";



@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `
})

export class CounterPage {
  counter: number = 10;

  increment( value: number = 1) {
    this.counter += value;
  }

  reset() {
    this.counter = 10;
  }
}
