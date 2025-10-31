import { AbstractControl, FormArray, FormGroup, ValidationErrors } from "@angular/forms";

async function sleep() {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(true)
        },2500);
    })
}

export class FormUtils {
    //Regular Expressions
    static namePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
    static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';

    static getTextError(errors: ValidationErrors){
        const errorMessages: Record<string, string> = {
            required: 'This field is required',
            min: `This field must be greater than ${errors['min']?.min}`,
            minlength: `This field must be at least ${errors['minlength']?.requiredLength} characters`,
            email: 'This field must be a valid email',
            pattern: FormUtils.getPatternError(errors?.['pattern']),
            emailTaken: 'This email is already taken',
            usernameTaken: 'This username is already taken',
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

    static isValidForm(form: FormGroup): boolean | null {
        return (
            !!form.errors && 
                form.touched
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

    static isFieldOneEqualToFieldTwo( field1: string, field2: string ) {
        return ( formGroup: AbstractControl ) => {
            const field1Value = formGroup.get( field1 )?.value;
            const field2Value = formGroup.get( field2 )?.value;

            return field1Value === field2Value ? null : { fieldsNotEqual: true };
        }
    }

    static async checkingServerResponse( control: AbstractControl ): Promise<ValidationErrors | null> {

        await sleep();

        const formValue = control.value;

        if ( formValue === 'scalderon@gmail.com' ){
            return {
                emailTaken: true,
            }
        }

        return null;
    }

    static checkingUsername( control: AbstractControl ): ValidationErrors | null {

        const formValue = control.value;

        return formValue === 'scalderon' ? {
            usernameTaken: true,
        } : null;
    }
}

