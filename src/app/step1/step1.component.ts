import { Component, OnInit} from '@angular/core';
import { TeslaService } from '../services/tesla.service';
import { CarModel } from '../models/CarModel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Color } from '../models/Color';
import { CommonService } from '../services/common.service';
import { SelectedCar } from '../models/SelectedCar';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss'
})
export class Step1Component implements OnInit {
  
  carModels: Array<CarModel> =[];

  selectedModel?:CarModel;
  selectedColor?:Color;

  selectedCar:SelectedCar=new SelectedCar();

  constructor(private teslaService:TeslaService,private commonService: CommonService){}
 
  ngOnInit(){
    this.commonService.SelectedCarObservable.subscribe(
      (selectedCar:SelectedCar) =>
      { 
        this.selectedCar=selectedCar;
        this.teslaService.getCarModels().subscribe(
          data =>
          {
            this.carModels=data;
            this.selectedModel=this.carModels.find(x=> x.code == this.selectedCar.model?.code);
            this.selectedColor=this.selectedModel?.colors.find(x=>x.code == this.selectedCar.color?.code); 
          }
        );
      }
    );
  }

  onSelectColorChange(){
    this.selectedCar.color=this.selectedColor;
    this.commonService.SelectedCar(this.selectedCar);
  }

  onSelectModelChange(){
    this.selectedColor=undefined;
    this.selectedCar=new SelectedCar();
    this.selectedCar.model=this.selectedModel;
    this.commonService.SelectedCar(this.selectedCar);
  }
}
