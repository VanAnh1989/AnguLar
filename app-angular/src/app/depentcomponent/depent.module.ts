import { FormsModule } from "@angular/forms";
import { NgModule }from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DependentComponent } from "./dependent.component";

@NgModule({
    declarations : [DependentComponent],
    imports : [BrowserModule],
    exports : [DependentComponent],
})
export class DepentModule{}