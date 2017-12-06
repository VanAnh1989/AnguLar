import { NgModule }from "@angular/core";
import { BusinessModule } from "../featuremodule/business.module";
import { MatFormFieldModule,MatInputModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    exports : [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
    ]
})

export class ShareModule{}