import {AbstractControl} from '@angular/forms'

export function urlValidator(control: AbstractControl) {
  let isHttpUrl = control.value.startsWith('http://');
  let isHttpsUrl = control.value.startsWith('https://');

  return {
    validUrl: (isHttpUrl || isHttpsUrl)
  };
}
