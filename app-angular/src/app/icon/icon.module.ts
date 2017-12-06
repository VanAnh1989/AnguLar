import { NgModule } from '@angular/core';
import { IconComponent } from './icon.component';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModule} from '../sharemodule/share.module';
import { MatIconModule} from '@angular/material';
@NgModule({
    declarations : [IconComponent],
    imports : [BrowserModule ,ShareModule, MatIconModule],
    exports : [IconComponent]
})
export class IconModule{}
