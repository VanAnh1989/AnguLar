import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component'; 
import { RegisterRoutingModule } from './register.routing.module';
import { FormComponent } from './form/form.component';

@NgModule({  
    imports : [FormsModule , CommonModule , RegisterRoutingModule],
    declarations : [RegisterComponent,FormComponent]
})

export class RegisterModule{}