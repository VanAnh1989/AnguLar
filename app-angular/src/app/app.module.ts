import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AutoModule } from './autocomplete/auto.module';
import { FormsModule } from '@angular/forms';
import { CarService } from './service/car.service';
import { Logger } from './service/log.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AutoModule
  ],
  providers: [
    CarService,
    {provide : Logger, useClass : Logger}],
  bootstrap: [AppComponent]
})
export class AppModule { }
