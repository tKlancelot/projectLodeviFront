import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { CarModel } from 'src/app/models/car-model';
import { FuelType } from 'src/app/models/fuel-type';
import { SearchService } from 'src/app/services/search.service';
import { Advert } from '../../models/advert';
import { AdvertsService } from '../../services/adverts.service';
import { CarModelService } from '../../services/car-model.service';
import { FuelTypeService } from '../../services/fuel-type.service';


@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent implements OnInit {

  adverts : Advert[];
  isLoading : boolean;
  searchTerm: string;
  searchFuel: string;
  searchExactly : string;
  listOfBrands: Brand[];
  listOfCarModels: CarModel[];
  listOfFuelTypes: FuelType[];

  listOfPrice = ['> 5000 <= 10000','> 10000 <= 15000', '> 15000 <= 20000', ' > 20000'];


  constructor(private fuelTypeService : FuelTypeService, private advertService : AdvertsService, private allbrand: SearchService, private allcarmodels : CarModelService) {  }

  ngOnInit(): void {
    this.isLoading = true;
    this.fuelTypeService.getAll().subscribe(data=>{
      this.listOfFuelTypes = data['hydra:member'];
    })
    this.allbrand.getBrand().subscribe(data =>{
      this.listOfBrands = data['hydra:member'];
      this.allcarmodels.getAll().subscribe(data =>{
        this.listOfCarModels = data['hydra:member'];    
      this.advertService.getAll().subscribe(adverts => {
        this.adverts = adverts['hydra:member'];
        this.isLoading = false;
        });
      });
    });
  }



}
