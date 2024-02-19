import { Component, OnInit } from '@angular/core';
import { SelectedCar } from '../models/SelectedCar';
import { CommonModule } from '@angular/common';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss'
})
export class Step3Component implements OnInit{

  selectedCar:SelectedCar=new SelectedCar();

  constructor(private commonService: CommonService){}

  ngOnInit()
  {
    this.commonService.SelectedCarObservable.subscribe(selectedCar => this.selectedCar=selectedCar); 
  }
}
