import { Component } from '@angular/core';

@Component({
    selector: 'app-select',
    templateUrl: './select.html',
})

export class SelectComponent {
    dogs: [{}] = [
        {
            name:'My',
            value : ['Robeto','Roala','Raoto'],
        },
        {
            name:'Braxin',
            value : ['Kaha','Koala','Kota'],
        },
        {
            name:'Argentina',
            value : ['Hoto','hola','Bata'],
        },
        {
            name:'Quata',
            value : ['Bibo','Bembo','Bumbi'],
        },
        {
            name:'Korean',
            value : ['Anvan','Anhji','Aklin'],
        },
    ]; 
}