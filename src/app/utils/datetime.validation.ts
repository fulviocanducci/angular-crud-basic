import { FormControl } from '@angular/forms';
import { DateTime } from './datetime';

export class DatetimeValidation {
    private static instance = new DateTime();
    static dateValidOrNull(control: FormControl): { [key: string]: any } {
        if (control.value === null || control.value.length === 0) {
            return null;
        }
        return DatetimeValidation.dateValid(control);
    }
    static dateValid(control: FormControl): { [key: string]: any } {
        const status = control.value !== null
            && control.value.length === 10
            && control.value
            && DatetimeValidation.instance.valid(control.value, 'DD/MM/YYYY');
        if (!status) {
            return {
                DateValide: true
            };
        }
        return null;
    }
}
