import { Component, OnInit } from '@angular/core';
import { Advert } from 'src/app/models/advert';
import { Brand } from 'src/app/models/brand';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  listOfBrands: Brand[];
  listOfAdverts: Advert[];
  brandSelected : number;

  constructor(private searchApi: SearchService) { }

  ngOnInit(): void {
    this.searchApi.getBrand().subscribe(data =>{
      this.listOfBrands = data['hydra:member'];
    })
  }

  onBrandSelected(selectedBrandId:any):void{
    this.searchApi.getAdvertForSelectedBrandByParam(selectedBrandId).subscribe(data=>{
      this.listOfAdverts = data['hydra:member'];
    })
  }
}

