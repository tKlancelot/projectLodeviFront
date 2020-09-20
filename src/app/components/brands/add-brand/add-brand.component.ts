import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from '../../../models/brand';
import { BrandsService } from '../../../services/brands.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  brand: Brand;
   
  constructor(private brandService : BrandsService, private router: Router){}
  
  ngOnInit():void{
    this.brand = new Brand();
  }

  submitBrand():void{
    this.brandService.add(this.brand).subscribe(then=>{
      this.router.navigate(['/brands/list']);
    });
  }
}
