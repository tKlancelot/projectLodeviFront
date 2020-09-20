import {CarModel} from '../models/car-model';
import {Garage} from '../models/garage';
import {Brand} from '../models/brand';
import { CastExpr } from '@angular/compiler';
import { User } from './user';


export class Advert {
    id : number;
    price : number;
    mileage : number;
    fuelType : string;
    description : string;
    reference : string;
    picture : string;
    publicationDate : Date;
    releaseYear : Date;
    carModel : CarModel;
    garage : Garage;
}
