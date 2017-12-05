import { Component } from '@angular/core';
import { HttpClient , HttpErrorResponse } from '@angular/common/http'
import { Account } from '../model/account';

@Component ({
    selector:"app-http",
    templateUrl : './http.html',
})

export class HttpComponent {
    result : Account[];
    http : HttpClient;
    constructor(http : HttpClient){
        this.http = http;
        this.loadData();
    }
    loadData() : void {
        this.http.get<Account[]>("getAllAccount").subscribe(data => {
            this.result = data;
        },(err : HttpErrorResponse) => {
            if(err.error instanceof Error){
                console.log("Some thing Wrong");
            }else{
                console.log("Can't get URL")
            }
        }
    );
    }
}