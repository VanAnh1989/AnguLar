import {NgModule} from '@angular/core';
import {MatDatepickerModule , MatNativeDateModule} from '@angular/material';
import {DatepickComponent} from './datepick.component';
import {ShareModule} from '../sharemodule/share.module';
import {MatMomentDateModule} from '@angular/material-moment-adapter';

@NgModule({
    declarations : [DatepickComponent],
    imports : [
        ShareModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMomentDateModule,
    ],
    exports : [DatepickComponent]

})
export class DatepickModule{}