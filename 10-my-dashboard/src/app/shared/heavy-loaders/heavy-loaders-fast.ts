import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';


@Component({
  selector: 'app-heavy-loaders-fast',
  imports: [NgClass],
  template: `
    <section [ngClass]="['w-full', cssClass()]">
      <ng-content />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersFast {

  cssClass = input.required<string>();

  constructor() {
    console.log('HeavyLoadersFast constructor');
  }


}
