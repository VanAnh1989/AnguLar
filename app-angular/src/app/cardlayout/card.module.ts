import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModule} from '../sharemodule/share.module';
import { MatCardModule , MatIconModule} from '@angular/material';
@NgModule({
    declarations : [CardComponent],
    imports : [BrowserModule ,MatIconModule , MatCardModule],
    exports : [CardComponent]
})
export class CardModule{}