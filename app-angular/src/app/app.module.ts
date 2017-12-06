import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CarService } from './service/car.service';
import { Logger } from './service/log.service';
import { ShareModule } from './sharemodule/share.module';
import { DatepickModule } from './datepicker/datepick.module';
import { FormfieldModule } from './formfield/formfield.module';
import { SelectModule } from './select/select.module';
import { MenuModule } from './menu/menu.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MenuModule,
  ],
  providers: [
    CarService,
    {provide : Logger, useClass : Logger}],
  bootstrap: [AppComponent]
})
export class AppModule { }
