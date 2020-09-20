import {CarModel} from '../models/car-model';
import {Brand} from '../models/brand';
import { CastExpr } from '@angular/compiler';
import { Advert } from './advert';

export class User {
    id : number;
    username : string;
    password : string;
    roles : [];
}
