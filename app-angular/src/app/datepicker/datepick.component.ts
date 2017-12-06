import { Component , LOCALE_ID} from '@angular/core';
import { FormControl } from '@angular/forms';
import {DateAdapter, MAT_DATE_LOCALE , MAT_DATE_FORMATS} from '@angular/material/core';
import {MomentDateAdapter , MAT_MOMENT_DATE_FORMATS} from '@angular/material-moment-adapter';

export const MY_FORMAT = {
    parse : {
        dateInput : "LL",
    },
    display : { 
        dateInput : 'DD-MM-YYYY',
        monthYearLabel : 'MMM YYYY',
        dateA11yLabel : 'LL',
        monthYearA11yLabel : 'MMM YYYY'
    }
}

@Component({
    selector : 'app-datepick',
    templateUrl : './datepick.html',
    providers : [
        {provide: MAT_DATE_LOCALE, useValue: 'ja'},
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: MY_FORMAT},
    ]
})

export class DatepickComponent{
    minDate = new Date(2017,1,1);
    maxDate = new Date(2018,1,1);
    setName(value : string) : void {
        console.log("done "+value);
    }
}
