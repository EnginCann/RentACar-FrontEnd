import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { Cardetails } from '../models/carDetails';
import { ListResponseModel } from '../models/listResonseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailsService {
  apiUrl="https://localhost:44355/api/";
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<Cardetails>>
  {
    let newPath = this.apiUrl+"cars/getlist"
    return this.httpClient.get<ListResponseModel<Cardetails>>(newPath)
  }

}
