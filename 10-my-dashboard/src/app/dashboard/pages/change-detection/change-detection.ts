import { Title } from '@/app/shared/title/title';
import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  imports: [Title, JsonPipe],
  templateUrl: './change-detection.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetection {

  public currentFramework = computed( () => {
    return `Change detection: ${this.frameworkAsSignal().name}`
  });

  public frameworkAsSignal = signal({
    name: 'Angular',
    version: '21',
    releaseDate: '2025',
  })

  public frameworkAsProperty = {
    name: 'Angular',
    version: '21',
    releaseDate: '2025',
  }

  constructor() {
    setTimeout(() => {

      // this.frameworkAsProperty.name = 'React';

      this.frameworkAsSignal.update( value => ({
        ...value,
        name: 'React'
      }))

      console.log("Finished")
    }, 3000);
  }

}
