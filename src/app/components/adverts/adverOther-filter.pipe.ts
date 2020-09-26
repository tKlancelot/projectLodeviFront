import { Pipe, PipeTransform } from '@angular/core';
import { Advert } from '../../models/advert';

@Pipe({
    name: 'advertOtherFilter'
})
export class AdvertOtherFilter implements PipeTransform{

    //filtre sur les brands 

    transform(adverts : Advert[], searchBrand:string):Advert[]{
        if (!adverts || !searchBrand){
            return adverts;
        }
        else{
            return adverts.filter(advert => 
                advert.carModel.brand.brandLabel.toLowerCase() === searchBrand.toLowerCase());
        }
    }
}