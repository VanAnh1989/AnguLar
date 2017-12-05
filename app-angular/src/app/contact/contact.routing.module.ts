import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ContactComponent } from './contact.component';

const router = [{path : 'contact' , component : ContactComponent}]
@NgModule({  
    imports : [RouterModule.forChild(router)],
    exports : [RouterModule]
})

export class ContactroutingModule{}