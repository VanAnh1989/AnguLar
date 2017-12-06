import { Component } from "@angular/core";

@Component({
    selector: 'app-icon',
    templateUrl: './icon.html',
    styleUrls : ['../app.component.css','../assets/font-awesome-4.7.0/css/font-awesome.min.css']
})

export class IconComponent {
    selectEvent(value : any){
        console.log(value);
    }
}