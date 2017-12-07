import { NgModule } from '@angular/core';
import { DialogComponent,DialogShowComponent } from './dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModule} from '../sharemodule/share.module';
import { MatDialogModule, MatButtonModule} from '@angular/material';
@NgModule({
    declarations : [DialogComponent,DialogShowComponent],
    imports : [ShareModule ,MatDialogModule ,MatButtonModule],
    entryComponents : [DialogShowComponent],
    exports : [DialogComponent]
})
export class DialogModule{}