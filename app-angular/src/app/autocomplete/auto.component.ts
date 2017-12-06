import { Component ,OnInit } from "@angular/core";
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
    selector : 'app-auto',
    templateUrl : './auto.html'
})

export class AutoComponent implements OnInit{
    myControl : FormControl= new FormControl();
    options : string[] = ['Nam','Anh','Hieu','Hung','Chien','Ba','Thang','Thanh'];
    filterOptions : Observable<string[]>;
    ngOnInit() : void {
        this.filterOptions = this.myControl.valueChanges.startWith('').map(val => this.filter(val));

    }
    filter(val : string) : string[]{
        return this.options.filter(option => option.toLowerCase().indexOf(val.toLowerCase())===0);
    };
    getName() : boolean {
        alert('done');
        return false;
    }
}