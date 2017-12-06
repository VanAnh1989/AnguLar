import { NgModule } from '@angular/core';
import { SlideComponent } from './slide.component';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModule} from '../sharemodule/share.module';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    declarations : [SlideComponent],
    imports : [BrowserModule ,ShareModule , MatSidenavModule],
    exports : [SlideComponent]
})

export class SlideModule{}