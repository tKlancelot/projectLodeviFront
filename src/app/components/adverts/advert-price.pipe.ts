import { Pipe, PipeTransform } from '@angular/core';
import { Advert } from '../../models/advert';

@Pipe({
  name: 'advertPriceFilter'
})
export class AdvertPricePipe implements PipeTransform {

    //filtre sur carmodels 

    transform(adverts : Advert[], searchPrice:string):Advert[]{
      if (!adverts || !searchPrice){
          return adverts;
      }
      else{
          return adverts.filter(advert => 
              // advert.price > searchPrice.indexOf[1]);
              advert.price > searchPrice.indexOf[1]);
      }

  }

}
