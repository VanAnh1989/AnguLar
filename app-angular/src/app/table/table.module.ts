import { NgModule } from '@angular/core';
import {TableComponent } from './table.component';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModule} from '../sharemodule/share.module';
import { MatButtonModule ,MatTableModule , MatPaginatorModule , MatSortModule} from '@angular/material';
@NgModule({
    declarations : [TableComponent],
    imports : [ShareModule ,MatTableModule ,MatButtonModule , MatPaginatorModule , MatSortModule],
    exports : [TableComponent]
})
export class TableModule{}