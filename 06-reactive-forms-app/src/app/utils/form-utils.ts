import { FormGroup } from "@angular/forms";

export class FormUtils {

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

        const errorMessages: Record<string, string> = {
            required: 'This field is required',
            min: `This field must be greater than ${errors['min']?.min}`,
            minlength: `This field must be at least ${errors['minlength']?.requiredLength} characters`,
        };

        // Obtiene la primera clave de error que exista
        const firstErrorKey = Object.keys(errors)[0];
        return errorMessages[firstErrorKey] ?? null;
    }
}