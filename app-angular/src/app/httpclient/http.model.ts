import { FormsModule } from "@angular/forms";
import { NgModule }from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpComponent } from './http.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations : [HttpComponent],
    imports : [BrowserModule,HttpClientModule],
    exports : [HttpComponent],
})
export class HttpModule{}