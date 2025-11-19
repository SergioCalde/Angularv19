import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { 
    AsyncPipe,
    I18nPluralPipe, 
    I18nSelectPipe, 
    JsonPipe, 
    KeyValuePipe, 
    SlicePipe, 
    TitleCasePipe,
    UpperCasePipe, 
  } from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Sergio',
  gender: 'male',
  age: 28,
  address: 'San Jose, CRI',
};

const client2 = {
  name: 'Nicole',
  gender: 'female',
  age: 27,
  address: 'San Jose, CRI',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
      CardComponent, 
      AsyncPipe,
      I18nPluralPipe, 
      I18nSelectPipe, 
      JsonPipe, 
      KeyValuePipe, 
      SlicePipe, 
      TitleCasePipe, 
      UpperCasePipe, 
    ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  // i18nSelectPipe
  client = signal(client1);

  invitationMap = {
    male: "invitarlo",
    female: "invitarla"
  };

  changeClient(){
    if ( this.client() === client1){
      this.client.set(client2);
      return;
    } 
    
    this.client.set(client1);
  }

  // i18nPluralPipe

  clientsMap = signal({
    '=0': 'We don\'t have any clients waiting.',
    '=1': 'We have currently 1 client waiting.',
    other: 'We have currently # clients waiting.',
  });

  clients = signal([
    'Sergio',
    'Nicole',
    'Maria',
    'Juan',
    'Carlos',
    'Luis',
    'Pedro',
    'Daniela',
    'Ana',
    'Jose',
  ]);

  deleteClient(){
    this.clients.update( prev => prev.slice(1) );
  }

  // KeyValuePipe

  profile = {
    name: 'Sergio',
    age: 28,
    gender: 'male',
    address: 'San Jose, CRI'
  }

  // AsyncPipe

  promiseValue: Promise<string> = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('We have a value in the promise');
          reject('We have an error in the promise');
          console.log('Promise resolved');
      }, 3500);
  });

  myObservableTimer = interval(2000)
    .pipe(
      map( (value) =>  value + 1 ),
      tap( (value) => console.log('Observable timer fired', value) )

    );



}


