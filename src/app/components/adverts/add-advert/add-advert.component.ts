import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Advert } from 'src/app/models/advert';
import { CarModel } from 'src/app/models/car-model';
import { FuelType } from 'src/app/models/fuel-type';
import { Garage } from 'src/app/models/garage';
import { User } from 'src/app/models/user';
import { AdvertsService } from 'src/app/services/adverts.service';
import { CarModelService } from 'src/app/services/car-model.service';
import { FuelTypeService } from 'src/app/services/fuel-type.service';
import { GaragesService } from 'src/app/services/garages.service';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-advert',
  templateUrl: './add-advert.component.html',
  styleUrls: ['./add-advert.component.css']
})
export class AddAdvertComponent implements OnInit {


  garageList : Garage[];
  carModelList : CarModel[];
  fuelTypeList : FuelType[];
  // fuelTypeList = ['essence','diesel','bio-ethanol','bio-diesel','GPL-c'];
  advert : Advert;
  isLoading: boolean;
  key = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 4);
  ref : string;
  private apiUrl = 'http://localhost:8000/api/adverts';  

  selectedFile : File = null;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private fuelTypeService : FuelTypeService, private advertService : AdvertsService, private garageService : GaragesService, private carModelService : CarModelService, private router : Router) { }



  ngOnInit(): void {
    this.isLoading = true;
    this.fuelTypeService.getAll().subscribe(fuelTypeList=>{
      this.fuelTypeList = fuelTypeList['hydra:member'];
    })
    this.garageService.getAll().subscribe(garageList=>{
      this.garageList = garageList['hydra:member'];
    })
        this.carModelService.getAll().subscribe(carModelList=>{
      this.carModelList = carModelList['hydra:member'];
    });

    this.advert = new Advert();
  }

  onFileSelected(event){
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
  }

  submitAdvert():void{
    console.log(this.selectedFile.name);

    // upload du fichier
    // envoyer le contenu du fichier reussir a uploader le fichier (service d'upload de fichier); service qui va me renvoyer l'url 
    // this.advert.picture = this.selectedFile.name;
    
    alert('stop');
    this.advertService.add(this.advert).subscribe(data=>{
      this.router.navigate(['/menuGarageOwner']);
    });
  }
}
