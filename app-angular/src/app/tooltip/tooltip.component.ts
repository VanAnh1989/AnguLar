import { Component,Injectable } from "@angular/core";
import { MatTooltip } from '@angular/material';
@Component({
    selector: 'app-tooltip',
    templateUrl: './tooltip.html',
    styleUrls : ['../app.component.css']
})
export class TooltipComponent {
    toolTip = 'nguyen van anh';

}