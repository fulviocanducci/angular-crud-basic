import { Inject } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/pt-br';

@Inject({
    providedIn: 'root'
})
export class DateTime {
    constructor() {
        moment.locale('pt-BR');
    }
    valid(value: string, format = 'YYYY-MM-DD') {
        const d = moment(value, format);
        return d.isValid();
    }
    formatFromTo(value: string, format = 'YYYY-MM-DD', to = 'YYYY-MM-DD') {
        if (!this.valid(value, format)) {
            return null;
        }
        const d = moment(value, format);
        return d.format(to).toString();
    }
}
