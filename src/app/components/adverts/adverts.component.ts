import { Component, OnInit } from '@angular/core';
import { Advert } from '../../models/advert';
import { AdvertsService } from '../../services/adverts.service';
import { CarModelService } from '../../services/car-model.service';
import {CarModel} from '../../models/car-model';
import {Brand} from '../../models/brand';
import {Garage} from '../../models/garage';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.css']
})
export class AdvertsComponent implements OnInit {

  adverts : Advert[];
  isLoading : boolean;

  constructor(private advertService : AdvertsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.advertService.getAll().subscribe(adverts => {
      this.adverts = adverts['hydra:member'];
      this.isLoading = false;
    });
  }

}
