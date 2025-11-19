import { Injectable, signal } from '@angular/core';

export type availableLocale = 'es'|'fr'|'en'|'pt';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private currentLocale = signal<availableLocale>('es');

  constructor() { 
    const stored = localStorage.getItem('locale');
    this.currentLocale.set(
      this.isAvailableLocale(stored) ? stored : 'es'
    )
  }

  get getLocale(){
    return this.currentLocale();
  }

  isAvailableLocale(value: string | null): value is availableLocale {
    return value !== null && ['es', 'en', 'fr', 'pt'].includes(value);
  }
  
  changeLocale(locale: availableLocale){
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }


}
