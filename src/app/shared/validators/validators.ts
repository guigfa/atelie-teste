import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordConfirmationValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const passwordControl = control.get('password');
      const confirmationControl = control.get('password_confirmation');
  
      if (passwordControl && confirmationControl) {
        const password = passwordControl.value;
        const confirmation = confirmationControl.value;
  
        if (password !== confirmation) {
          confirmationControl.setErrors({ errorConfirmationPassword: true });
          return { errorConfirmationPassword: true };
        } else {
          confirmationControl.setErrors(null);
          return null;
        }
      }
  
      return null;
    };
  }