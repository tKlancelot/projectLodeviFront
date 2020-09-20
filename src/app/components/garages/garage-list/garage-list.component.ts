import { Component, OnInit } from '@angular/core';
import { Garage } from '../../../models/garage';
import { GaragesService } from '../../../services/garages.service';

@Component({
  selector: 'app-garages',
  templateUrl: './garage-list.component.html',
  styleUrls: ['./garage-list.component.css']
})
export class GaragesComponent implements OnInit {

  garages: Garage[];
  isLoading: boolean;

  constructor(private garageService : GaragesService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.garageService.getAll().subscribe(garages => {
      this.garages = garages['hydra:member'];
      this.isLoading = false;
    });
  }

}
