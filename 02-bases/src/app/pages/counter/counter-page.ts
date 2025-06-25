import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CounterPage {
  counter: number = 10;
  counterSignal = signal(10);

  increment( value: number = 1) {
    this.counter += value;
    this.counterSignal.update( ( current ) => current + value);
  }

  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
