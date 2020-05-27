import {FormControl, ValidationErrors} from "@angular/forms";
import * as moment from 'moment'

/**
 * Check if form control has a date value
 * in the following format DD-MM-YYYY HH:mm
 *
 * @param control the control which should contain a valid date
 */
export function dateValidator(control: FormControl): ValidationErrors | null {
  let givenDate = '';

  if (control.value != null) {
    givenDate = control.value.toString().trim();
  }

  const dateFormat = 'DD-MM-YYYY';
  const date = moment(givenDate, dateFormat, true);

  if (!date.isValid()) {
    return {
      validDate: date.isValid()
    };
  }

  return null;
}
