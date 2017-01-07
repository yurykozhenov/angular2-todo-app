import { FormControl } from '@angular/forms';

export class CustomValidators {
  static required(control: FormControl) {
    return control.value.trim()
      ? null
      : { required: true };
  }
}
