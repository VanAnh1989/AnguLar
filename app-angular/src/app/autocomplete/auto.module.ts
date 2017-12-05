import { NgModule } from '@angular/core';
import { AutoComponent } from './auto.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AutoComponent],
    imports: [
        BrowserModule, 
        FormsModule, 
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatInputModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
    ],
    exports: [AutoComponent]
})

export class AutoModule { }