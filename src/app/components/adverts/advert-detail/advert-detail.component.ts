import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Advert } from 'src/app/models/advert';
import { AdvertsService } from 'src/app/services/adverts.service';

@Component({
  selector: 'app-advert-detail',
  templateUrl: './advert-detail.component.html',
  styleUrls: ['./advert-detail.component.css']
})
export class AdvertDetailComponent implements OnInit {

  id : number;
  advert : Advert;
  isLoading : boolean;
  
  constructor(private advertService : AdvertsService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.isLoading = true;
    this.advertService.getOneAdvert(+this.route.snapshot.paramMap.get('id')).subscribe((data:
    Advert) => {
    this.advert = data;
    this.isLoading = false;
    });
  }

}
