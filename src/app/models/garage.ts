import {CarModel} from '../models/car-model';
import {Brand} from '../models/brand';
import { CastExpr } from '@angular/compiler';
import { Advert } from './advert';
import { User } from './user';

export class Garage {
    id : number;
    garageName : string;
    garageAdress : string;
    postalCode : string;
    siretNumber : string;
    user : User;
}