import {Component,OnInit} from '@angular/core';
import {AsyncPipe, CommonModule, JsonPipe} from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonService } from './services/common.service';
import { SelectedCar } from './models/SelectedCar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe,RouterOutlet,RouterLink,CommonModule],
  templateUrl:'./app.component.html',
})
export class AppComponent implements OnInit{

  isStep2Disabled: boolean =true;
  isStep3Disabled: boolean =true;

  imgUrl?:string;

  selectedCar:SelectedCar=new SelectedCar();

  constructor(private commonService:CommonService){}

  ngOnInit() {
    this.commonService.SelectedCarObservable.subscribe(
      (selectedCar:SelectedCar) => 
      { 
        this.selectedCar=selectedCar;
        this.isStep2Disabled = this.selectedCar.notSelectedModelAndColor();
        this.isStep3Disabled = this.selectedCar.notSelectedConfig();
        this.imgUrl="https://interstate21.com/tesla-app/images/"+this.selectedCar.model?.code+"/"+this.selectedCar.color?.code+".jpg";
      }
    ); 
  }
  
}
