import { NgModule } from '@angular/core';
import { AutoComponent } from './auto.component';
import { MatAutocompleteModule} from '@angular/material';
import {ShareModule} from '../sharemodule/share.module';
@NgModule({
    declarations: [AutoComponent],
    imports: [
        ShareModule,
        MatAutocompleteModule,
    ],
    exports: [AutoComponent]
})

export class AutoModule { }