import {FormControl} from "@angular/forms";
import * as moment from 'moment'

/**
 * Check if form control has a date value
 * in the following format DD-MM-YYYY HH:mm
 *
 * @param control the control which should contain a valid date
 */
export function dateValidator(control: FormControl) {
  const dateString = control.value.toString();
  const dateFormat = 'DD-MM-YYYY HH:mm';
  const date = moment(dateString, dateFormat, true);

  return {
    validDate: date.isValid()
  };
}
