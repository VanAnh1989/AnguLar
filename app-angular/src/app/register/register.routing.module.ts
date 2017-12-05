import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';
import { RegisterComponent } from './register.component';
import { FormComponent} from './form/form.component';


const router : Routes = [
    {
        path : 'register',
        component : RegisterComponent,
        children : [
            {path : 'form' , component : FormComponent }
        ]
    },
    
]
@NgModule({  
    imports : [RouterModule.forChild(router)],
    exports : [RouterModule]
})

export class RegisterRoutingModule{}