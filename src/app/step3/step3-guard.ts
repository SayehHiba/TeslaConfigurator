import { Injectable } from "@angular/core";
import { CommonService } from "../services/common.service";
import { CanActivate, Router } from "@angular/router";

@Injectable({
    providedIn: 'root',
  })
  export class Step3Guard implements CanActivate
  {
    constructor(private commonService: CommonService,private router: Router) {}
  
    canActivate(): boolean {
        var isActive:boolean =false;
        this.commonService.SelectedCarObservable.subscribe(selectedCar => isActive= !selectedCar.notSelectedConfig());
        if (!isActive){
            this.router.navigateByUrl('/Step2');
        }
        return isActive;
    }
  }
