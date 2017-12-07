import { NgModule } from '@angular/core';
import {TooltipComponent } from './tooltip.component';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModule} from '../sharemodule/share.module';
import { MatTooltipModule, MatButtonModule} from '@angular/material';
@NgModule({
    declarations : [TooltipComponent],
    imports : [ShareModule ,MatTooltipModule ,MatButtonModule],
    exports : [TooltipComponent]
})
export class TooltipModule{}