import { Pipe, PipeTransform } from '@angular/core';
import { Advert } from '../../models/advert';

@Pipe({
    name: 'advertFilter'
})
export class AdvertFilterPipe implements PipeTransform{


    //filtre sur carmodels 

    transform(adverts : Advert[], searchTerm:string):Advert[]{
        if (!adverts || !searchTerm){
            return adverts;
        }
        else{
            return adverts.filter(advert => 
                advert.carModel.modelName.toLowerCase() === searchTerm.toLowerCase());
        }

    }
}