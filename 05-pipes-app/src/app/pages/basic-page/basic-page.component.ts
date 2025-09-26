import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { availableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [ LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe ],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent { 

  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('sergio');
  nameUpper = signal('SERGIO');
  fullName = signal('SeRgIO CaldErON');

  customDate = signal( new Date() );

  tickingDateEffect = effect(( onCleanup ) => {
    const interval = setInterval( () => {
      this.customDate.set( new Date() );
    }, 1000);

    onCleanup( () => clearInterval( interval ) );
  });

  changeLocale( locale: availableLocale ){
    // console.log({locale});
    this.localeService.changeLocale(locale);
  }
}
