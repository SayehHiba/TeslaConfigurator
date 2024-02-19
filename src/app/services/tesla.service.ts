import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarModel } from '../models/CarModel';
import { Observable } from 'rxjs';
import { CarOption } from '../models/CarOption';

@Injectable({
  providedIn: 'root'
})
export class TeslaService {

  constructor(private http:HttpClient) { }

  getCarModels():Observable<Array<CarModel>>
  {
    return this.http.get<Array<CarModel>>('/models');
  }
  
  getCarOptions(CarModelCode: string):Observable<CarOption>
  {
    return this.http.get<CarOption>('/options/'+CarModelCode);
  }

}
