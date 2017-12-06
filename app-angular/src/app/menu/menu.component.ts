import { Component } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { ViewChild } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.html',
})

export class MenuComponent {

    someMethod(trigger: MatMenuTrigger) {
        trigger.openMenu();
    }
    displaymenu(menuTrigger: MatMenuTrigger): boolean {
        menuTrigger.openMenu();
        return false;
    }
}