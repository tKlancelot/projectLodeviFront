import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarModel } from 'src/app/models/car-model';
import { BrandsService } from 'src/app/services/brands.service';
import { CarModelService } from 'src/app/services/car-model.service';

@Component({
  selector: 'app-modelcar-add',
  templateUrl: './modelcar-add.component.html',
  styleUrls: ['./modelcar-add.component.css']
})
export class ModelcarAddComponent implements OnInit {

  brandList : Brand[];
  carModel= new CarModel();
  isLoading : boolean;
   
  constructor(private brandService : BrandsService, private carModelService : CarModelService, private router: Router){}
  
  ngOnInit(): void {
    this.isLoading = true;
    this.brandService.getAll().subscribe(brandList => {
      this.brandList = brandList['hydra:member'];
      this.isLoading = false;
    });
  }


  submitModel():void{
    console.log(this.submitModel);
    console.log(this.carModel);

    this.carModelService.add(this.carModel).subscribe(data=>{
      this.router.navigate(['/adverts/list']);
    });
  }
}


