import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { CommonService } from "../services/common.service";

@Injectable({
    providedIn: 'root',
  })
  export class Step2Guard implements CanActivate
  {
    constructor(private commonService: CommonService,private router: Router) {}
  
    canActivate(): boolean 
    {
      var isActive:boolean =false;
      this.commonService.SelectedCarObservable.subscribe(selectedCar => isActive = !selectedCar.notSelectedModelAndColor());
      if (!isActive){
        this.router.navigateByUrl('/Step1');
      }
      return isActive;
    }
  }