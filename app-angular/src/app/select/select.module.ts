import { NgModule } from '@angular/core';
import { SelectComponent } from './select.component';
import { ShareModule } from '../sharemodule/share.module';
import { MatSelectModule} from '@angular/material';

@NgModule({
    declarations : [SelectComponent],
    imports : [ShareModule,MatSelectModule],
    exports : [SelectComponent]
})

export class SelectModule{}