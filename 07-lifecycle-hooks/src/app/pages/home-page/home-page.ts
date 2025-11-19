import { afterEveryRender, afterNextRender, Component, effect, OnInit, signal } from '@angular/core';
import { Title } from '../../components/title/title';

const log = ( ...messages: string[]) => {

  console.log(`${ messages[0]} %c${ messages.slice(1).join(', ') } `, 'color: #bada55')

}
const log2 = ( ...messages: string[]) => {

  console.log(`${ messages[0]} %c${ messages.slice(1).join(', ') } `, 'color: #1fd9c9ff')

}

@Component({
  selector: 'app-home-page',
  imports: [ Title ],
  templateUrl: './home-page.html',
})
export class HomePage implements OnInit { 

  traditionalProperty = 'Sergio';
  signalProperty = signal('Sergio');

  constructor() {
    console.log('HomePage constructor');

    // setTimeout( () => {
    //   this.signalProperty.set('Sergio Calderon2');
    //   console.log('setTimeout');
    // }, 2000);

  }

  changeTraditional() {
    this.traditionalProperty = 'Sergio Calderon';
  }

  changeSignal() {
    this.signalProperty.set('Sergio Calderon');
  }

  basicEffect = effect( ( onCleanup ) => {
    log2('effect','Scheduled & executed whenever the signals that it reads changes.');

    onCleanup( () => {
      log2('effect','Cleanup function');
    });

  });


  ngOnInit() {
    log("ngOnInit","Runs once after Angular has initialized all the component's inputs.");
  }
  ngOnChanges() {
    log("ngOnChanges","Runs every time the component's inputs have changed.");
  }
  ngDoCheck() {
    log("ngDoCheck","Runs every time this component is checked for changes.");
  }

  ngAfterContentInit() {
    log("ngAfterContentInit","Runs once after the component's content has been initialized.");
  }

  ngAfterContentChecked() {
    log("ngAfterContentChecked","Runs every time this component content has been checked for changes.");
  }
  ngAfterViewInit() {
    log("ngAfterViewInit","Runs once after the component's view has been initialized.");
  }
  ngAfterViewChecked() {
    log("ngAfterViewChecked","Runs every time the component's view has been checked for changes.");
  }

  ngOnDestroy() {
    log("ngOnDestroy","Runs once before the component is destroyed.");
  }

  afterNextRenderEffect = afterNextRender( () => {
    log("afterNextRenderEffect","Runs once the next time that all components have been rendered to the DOM.");
  });

  afterRender = afterEveryRender( () => {
    log("afterEveryRender","Runs every time all components have been rendered to the DOM.");
  });

}
