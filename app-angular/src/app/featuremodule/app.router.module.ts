import { Routes , RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactModule } from '../contact/contact.module';
import { RegisterModule} from '../register/register.module'

const router : Routes = [
    {path:'**' , redirectTo:"contact", pathMatch : "full"},
    {path: 'register', loadChildren : "app/register.module#RegisterModule"},
]

@NgModule({
    imports:[
        ContactModule,
        RegisterModule,
        RouterModule.forRoot(router),
    ],
    exports : [
        RouterModule
    ]
})
export class AppRouterModule{}