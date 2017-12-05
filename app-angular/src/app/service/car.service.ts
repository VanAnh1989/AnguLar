import { Injectable } from '@angular/core';
import { CarList } from '../model/car.list';
@Injectable()
export class CarService{
    constructor(){};
    getCars() : CarList{
        return new CarList();
    }
    taxCar(price : number) : number{
        return price*15/100;
    } 
}