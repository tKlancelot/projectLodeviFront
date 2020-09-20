import { Component, OnInit } from '@angular/core';
import { Advert } from '../../models/advert';
import { AdvertsService } from '../../services/adverts.service';
import { CarModelService } from '../../services/car-model.service';
import {CarModel} from '../../models/car-model';
import {Brand} from '../../models/brand';
import {Garage} from '../../models/garage';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent implements OnInit {

  adverts : Advert[];
  isLoading : boolean;

  constructor(private advertService : AdvertsService) {  }

  ngOnInit(): void {
    this.isLoading = true;
    this.advertService.getAll().subscribe(adverts => {
      this.adverts = adverts['hydra:member'];
      this.isLoading = false;
    });
  }

}
