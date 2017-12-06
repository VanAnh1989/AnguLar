import { NgModule } from '@angular/core';
import { TabComponent } from './tab.component';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModule} from '../sharemodule/share.module';
import { MatTabsModule , MatIconModule} from '@angular/material';
@NgModule({
    declarations : [TabComponent],
    imports : [BrowserModule ,ShareModule, MatTabsModule , MatIconModule],
    exports : [TabComponent]
})
export class TabModule{}