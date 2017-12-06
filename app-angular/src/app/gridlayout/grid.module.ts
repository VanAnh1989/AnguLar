import { NgModule } from '@angular/core';
import { GridComponent } from './grid.component';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModule} from '../sharemodule/share.module';
import { MatGridListModule , MatIconModule} from '@angular/material';
@NgModule({
    declarations : [GridComponent],
    imports : [BrowserModule , MatGridListModule , MatIconModule],
    exports : [GridComponent]
})
export class GridModule{}