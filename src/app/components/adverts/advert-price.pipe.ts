import { Pipe, PipeTransform } from '@angular/core';
import { Advert } from '../../models/advert';

@Pipe({
  name: 'advertPriceFilter'
})
export class AdvertPricePipe implements PipeTransform {

    //filtre sur carmodels 

    transform(adverts : Advert[], searchPrice:string){
        //implementer logique

  }

}
