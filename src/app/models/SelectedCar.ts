import { CarModel } from "./CarModel";
import { Color } from "./Color";
import { Config } from "./Config";

export class SelectedCar{
    
    model?:CarModel = undefined;
    color?:Color= undefined;
    config?: Config= undefined;
    tow: boolean =false;
    yoke: boolean =false;

    notSelectedModelAndColor(): boolean
    {
        if(this.model && this.color){
            return false;
        }
        return true;
    }

    notSelectedConfig():boolean
    {
        if(this.config){
            return false;
        }
        return true;
    }

    GetTotalCost():number
    {
        var fixOption=1000;
        var sum=(this.color?.price ?? 0)+(this.config?.price ?? 0);
        if(this.tow) sum+=fixOption;
        if(this.yoke) sum+= fixOption;
        return sum;
    }
}