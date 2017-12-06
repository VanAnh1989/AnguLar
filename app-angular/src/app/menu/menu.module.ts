import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModule} from '../sharemodule/share.module';
import { MatMenuModule, MatIconModule } from '@angular/material';

@NgModule({
    declarations : [MenuComponent],
    imports : [BrowserModule ,ShareModule , MatMenuModule , MatIconModule],
    exports : [MenuComponent]
})

export class MenuModule{}