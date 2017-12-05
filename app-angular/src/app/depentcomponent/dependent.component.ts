import { Component } from '@angular/core';
import { CarList } from '../model/car.list'
import { CarService} from '../service/car.service';
import { Car } from '../model/car.model';
import { Logger } from '../service/log.service';

@Component ({
    selector:"app-depent",
    templateUrl : './dependent.html',
})

export class DependentComponent {
    cars : Car[];
    service : CarService;
    price : number = 0;
    tax : number=0;
    setPrice(price : string) : void{
        if(isNaN(parseInt(price))){
            this.price = 0;
        }else{
            this.price = parseInt(price);
        }
    }
    constructor(cars : CarService,logger : Logger){
        this.cars = cars.getCars().car;
        this.service = cars;
    }
    calculaterTax() : void{
        this.tax = this.service.taxCar(this.price);
    }
}