import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResonseModel';
import { SingleResponseModel } from '../models/singleResponseModel';



@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44355/api/";
  constructor(private httpClient:HttpClient) { }

  getCars() :Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"cars/getall"
    // burası listresponsemodel li 
     return this.httpClient.get<ListResponseModel<Car>>(newPath)
    
  }
  getByBrand(brandId:number) :Observable<ListResponseModel<Car>>{
    
    let newPath = this.apiUrl+"cars/getbyBrand?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
   
 }
}
