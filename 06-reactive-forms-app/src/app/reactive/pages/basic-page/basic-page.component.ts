import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent { 

  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    // name: [value, /** Sincronous validation */, /* Asyncronous validation */]
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(10)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  // myForm = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // });
  // isValidField(fieldName: string): boolean | null {
  //   return (this.myForm.controls[fieldName].errors && 
  //     this.myForm.controls[fieldName].touched);
  // }

  // getFieldError(fieldName: string): string | null {
    
  //   if( !this.myForm.controls[fieldName] ) return null;

  //   const errors = this.myForm.controls[fieldName].errors ?? {};
  //   for( const key of Object.keys(errors) ) {
  //     console.log("Key: ",key);
  //     switch( key ) {
  //       case 'required':
  //         return 'This field is required';
  //       case 'min':
  //         return `This field must be greater than ${errors['min'].min}`;
  //       case 'minlength':
  //         return `This field must be at least ${errors['minlength'].requiredLength} characters`;
  //     }
  //   }
 
  //   return null;

  // }

  // getFieldError(fieldName: string): string | null {
  //   const control = this.myForm.controls[fieldName];
  //   if (!control || !control.errors) return null;

  //   const errors = control.errors;

  //   const errorMessages: Record<string, string> = {
  //     required: 'This field is required',
  //     min: `This field must be greater than ${errors['min']?.min}`,
  //     minlength: `This field must be at least ${errors['minlength']?.requiredLength} characters`,
  //   };

  //   // Obtiene la primera clave de error que exista
  //   const firstErrorKey = Object.keys(errors)[0];
  //   return errorMessages[firstErrorKey] ?? null;
  // }

  onSave() {
    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
    }

    console.log(this.myForm.value);

    this.myForm.reset();

  }

}
