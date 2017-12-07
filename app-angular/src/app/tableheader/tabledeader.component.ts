import { Component } from "@angular/core";
import {Sort} from '@angular/material';
@Component({
    selector: 'app-tableheader',
    templateUrl: './tableheader.html',
    styleUrls : ['../app.component.css']
})
export class TableheaderComponent {
    persons = [
        {nam : "Dinh Van Thang" , age : 20 , add : "Ca noi" , pho : '098888232'},
        {nam : "Dao Tan" , age : 30 , add : "Ta noi" , pho : '09888234'},
        {nam : "Chien Cuong" , age : 30 , add : "Thien noi" , pho : '098888111'},
        {nam : "Nam Nhan" , age : 20 , add : "Cam pha" , pho : '098888423'},
        {nam : "Ban Mai" , age : 21 , add : "Ma noi" , pho : '098888211'},
        {nam : "Day Dung" , age : 23 , add : "Chi noi" , pho : '0988811232'},
        {nam : "Dang Dang" , age : 23 , add : "Bung noi" , pho : '098881234'},
        {nam : "Bien Hien" , age : 28 , add : "Con noi" , pho : '098882423'},
        {nam : "Tinh Tien" , age : 27 , add : "Ha nam" , pho : '0988812353'}
    ];
    sortData(sort : Sort) : void{
        if(!sort.active || sort.direction === ''){
            return;
        }
        this.persons.sort((a,b)=>{
            let isAsc = sort.direction == 'asc';
            console.log(isAsc);
            switch (sort.active){
                case 'name': return compare(a.nam,b.nam ,isAsc);
                case 'age': return compare(+a.age,+b.age ,isAsc);
                case 'address': return compare(a.add,b.add ,isAsc);
                case 'phone': return compare(a.pho,b.pho ,isAsc);
                default: return 0;
            }
        })
    };   
}
function compare(a,b,isAsc){
    return (a<b ? -1 : 1)* (isAsc ? 1 : -1);
}
    
