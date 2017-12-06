import { Component } from "@angular/core";
@Component({
    selector: 'app-tab',
    templateUrl: './tab.html',
    styleUrls : ['../app.component.css']
})
export class TabComponent {
    selectEvent(value : any){
        console.log(value);
    }
}