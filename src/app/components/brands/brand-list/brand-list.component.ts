import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands: Brand[];
  isLoading: boolean;

  constructor(private brandService : BrandsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.brandService.getAll().subscribe(then => {
      this.brands = then['hydra:member'];
      this.isLoading = false;
    });
  }


}
