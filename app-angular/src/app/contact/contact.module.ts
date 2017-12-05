import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { ContactDirective } from './contact.directive';
import { ContactroutingModule } from './contact.routing.module';

@NgModule({  
    imports : [FormsModule , CommonModule , ContactroutingModule],
    declarations : [ContactComponent , ContactDirective]
})

export class ContactModule{}