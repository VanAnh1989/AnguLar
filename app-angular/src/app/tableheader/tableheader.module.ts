import { NgModule } from '@angular/core';
import { TableheaderComponent } from './tabledeader.component';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModule} from '../sharemodule/share.module';
import { MatTabsModule , MatIconModule , MatSortModule} from '@angular/material';
@NgModule({
    declarations : [TableheaderComponent],
    imports : [ShareModule , MatIconModule , MatSortModule],
    exports : [TableheaderComponent]
})
export class TableheaderModule{}