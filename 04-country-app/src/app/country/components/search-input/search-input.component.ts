import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent { 

  placeholder = input<string>('Search');
  searchValue = output<string>();
  debounceTime = input<number>(500);
  initialValue = input<string>();

  inputValue = linkedSignal<string>( () => this.initialValue() ?? '' );

  debounceEffect = effect( (onCleanup) => {
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.searchValue.emit(value);
    }, this.debounceTime());


    onCleanup(() => {
      clearTimeout(timeout);
    });

  })

  onSearch( value: string ) {
    this.searchValue.emit(value);
  }

}
