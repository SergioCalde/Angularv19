import { FormArray, FormGroup, ValidationErrors } from "@angular/forms";

export class FormUtils {
    //Regular Expressions
    static namePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
    static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';

    static getTextError(errors: ValidationErrors){
        console.log( "errors", errors );
        const errorMessages: Record<string, string> = {
            required: 'This field is required',
            min: `This field must be greater than ${errors['min']?.min}`,
            minlength: `This field must be at least ${errors['minlength']?.requiredLength} characters`,
            email: 'This field must be a valid email',
            pattern: FormUtils.getPatternError(errors?.['pattern']),
        };

        // Obtiene la primera clave de error que exista
        const firstErrorKey = Object.keys(errors)[0];
        return errorMessages[firstErrorKey] ?? null;
    }

    static isValidField(form: FormGroup, fieldName: string): boolean | null {
        return (
            !!form.controls[fieldName].errors && 
                form.controls[fieldName].touched
            );
    }

    static getFieldError(form: FormGroup, fieldName: string): string | null {
        const control = form.controls[fieldName];
        if (!control || !control.errors) return null;

        const errors = control.errors;

        return this.getTextError(errors);
    }

    static isValidFieldInArray( formArray: FormArray, index: number ) {
        return (
        formArray.controls[index].errors && formArray.controls[index].touched
        );
    }

    static getFieldErrorInArray(formArray: FormArray, index: number): string | null {
        const control = formArray.controls[index];
        if (!control || !control.errors) return null;

        const errors = control.errors;

        return this.getTextError(errors);
        
    }

    static getPatternError(patternError: any): string {
        if (!patternError || !patternError['requiredPattern']) return 'Invalid format';

        const pattern = patternError['requiredPattern'];
        
        if ( pattern === this.emailPattern ){
            return 'Invalid email format'
        }
        
        return 'Invalid format';
    }
}