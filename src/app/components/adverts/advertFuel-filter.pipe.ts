import { Pipe, PipeTransform } from '@angular/core';
import { Advert } from '../../models/advert';

@Pipe({
    name: 'advertFuelFilter'
})
export class AdvertFuelFilterPipe implements PipeTransform{

    transform(adverts : Advert[], searchFuel:string):Advert[]{
        if (!adverts || !searchFuel){
            return adverts;
        }
        else{
            return adverts.filter(advert => 
                advert.fuelType.fuelTypeLabel.toLowerCase() === searchFuel.toLowerCase());
        }
    }
}