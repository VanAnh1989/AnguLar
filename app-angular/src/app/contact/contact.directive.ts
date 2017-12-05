import {Directive , ElementRef} from '@angular/core';

@Directive({selector : '[blueColor]'})  

export class ContactDirective{
    constructor(private el : ElementRef) {
        this.el.nativeElement.style.color = "blue"
    }
}