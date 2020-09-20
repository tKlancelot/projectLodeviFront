import { Component, OnInit } from '@angular/core';
import { CarModel } from '../../../models/car-model';
import { CarModelService } from '../../../services/car-model.service';


@Component({
  selector: 'app-modelcar-list',
  templateUrl: './modelcar-list.component.html',
  styleUrls: ['./modelcar-list.component.css']
})

export class ModelcarListComponent implements OnInit {

  carModels: CarModel[];
  isLoading: boolean;

  constructor(private carModelService : CarModelService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.carModelService.getAll().subscribe(carModels => {
      this.carModels = carModels['hydra:member'];
      this.isLoading = false;
    });
  }

}



