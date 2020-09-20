import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Advert } from 'src/app/models/advert';
import { CarModel } from 'src/app/models/car-model';
import { Garage } from 'src/app/models/garage';
import { User } from 'src/app/models/user';
import { AdvertsService } from 'src/app/services/adverts.service';
import { CarModelService } from 'src/app/services/car-model.service';
import { GaragesService } from 'src/app/services/garages.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-advert',
  templateUrl: './add-advert.component.html',
  styleUrls: ['./add-advert.component.css']
})
export class AddAdvertComponent implements OnInit {

  garageList : Garage[];
  carModelList : CarModel[];
  fuelTypeList = ['essence','diesel','bio-ethanol','bio-diesel','GPL-c'];
  advert : Advert;
  isLoading: boolean;
  key = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 4);
  ref : string;  

   

  constructor(private activatedRoute: ActivatedRoute, private advertService : AdvertsService, private garageService : GaragesService, private carModelService : CarModelService, private router : Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.garageService.getAll().subscribe(garageList=>{
      this.garageList = garageList['hydra:member'];
    })
        this.carModelService.getAll().subscribe(carModelList=>{
      this.carModelList = carModelList['hydra:member'];
    });
    this.advert = new Advert();
  }

  submitAdvert():void{
    this.ref = (<HTMLInputElement>document.getElementById('reference')).value;
    this.ref = this.key;
    console.log(this.ref);
    this.advertService.add(this.advert).subscribe(data=>{
      this.router.navigate(['/menuGarageOwner']);
    });
  }
}
