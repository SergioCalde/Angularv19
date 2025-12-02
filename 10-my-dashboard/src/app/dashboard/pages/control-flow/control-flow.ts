import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Title } from "@/app/shared/title/title";

type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'app-control-flow',
  imports: [Title],
  templateUrl: './control-flow.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlow {
  showContent = signal(false);

  grade = signal<Grade>('A');

  frameworks = signal(['Angular', 'React', 'Vue', 'Svelte', 'Solid', 'Qwik']);
  frameworks2 = signal([]);

  toggleContent() {
    this.showContent.update((value) => !value);
  }
}
