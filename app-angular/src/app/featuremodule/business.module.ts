import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AppRouterModule } from '../featuremodule/app.router.module';

@NgModule({  
    imports : [AppRouterModule],
    exports: [
        AppRouterModule
    ]
})

export class BusinessModule{}