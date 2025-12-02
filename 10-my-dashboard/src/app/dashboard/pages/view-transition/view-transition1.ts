import { Title } from '@/app/shared/title/title';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-view-transition',
  imports: [Title],
  template: `
    <app-title title="View Transition 1" />

    <section class="flex justify-start">

      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1;"
      />

      <div
        style="view-transition-name: hero2;"
        class="bg-blue-500 w-56 h-56">

      </div>

    </section>


  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewTransition {}
