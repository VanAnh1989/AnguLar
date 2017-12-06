import { NgModule } from '@angular/core';
import { ListlayoutComponent } from './listlayout.component';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModule} from '../sharemodule/share.module';
import { MatListModule , MatIconModule} from '@angular/material';
@NgModule({
    declarations : [ListlayoutComponent],
    imports : [BrowserModule ,MatListModule , MatIconModule],
    exports : [ListlayoutComponent]
})
export class ListlayoutModule{}