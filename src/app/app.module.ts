import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdvertsComponent } from './components/adverts/adverts.component';
import { GaragesComponent } from './components/garages/garage-list/garage-list.component';
import { UserComponent } from './components/user/user.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { AddBrandComponent } from './components/brands/add-brand/add-brand.component';
import { BrandListComponent } from './components/brands/brand-list/brand-list.component';
import { ModelcarListComponent } from './components/modelcar/modelcar-list/modelcar-list.component';
import { ModelcarAddComponent } from './components/modelcar/modelcar-add/modelcar-add.component';
import { AddGarageComponent } from './components/garages/add-garage/add-garage.component';
import { MenuGarageOwnerComponent } from './components/menu-garage-owner/menu-garage-owner.component';
import { TempMenuComponent } from './components/temp-menu/temp-menu.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { VisitorComponent } from './components/visitor/visitor.component';
import { AddAdvertComponent } from './components/adverts/add-advert/add-advert.component';
import { AdvertDetailComponent } from './components/adverts/advert-detail/advert-detail.component';
import { MenuVisitorComponent } from './components/visitor/menu-visitor/menu-visitor.component';
import { SearchBarComponent } from './components/visitor/search-bar/search-bar.component';
import { AdvertFilterPipe } from './components/adverts/advert-filter.pipe';
import { AdvertFuelFilterPipe } from './components/adverts/advertFuel-filter.pipe';
import { AdvertOtherFilter } from './components/adverts/adverOther-filter.pipe';
import { FuelTypeComponent } from './components/fuel-type/fuel-type.component';
import { AdvertPricePipe } from './components/adverts/advert-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdvertsComponent,
    GaragesComponent,
    UserComponent,
    MenuAdminComponent,
    AddBrandComponent,
    BrandListComponent,
    ModelcarListComponent,
    ModelcarAddComponent,
    AddGarageComponent,
    MenuGarageOwnerComponent,
    TempMenuComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    VisitorComponent,
    AddAdvertComponent,
    AdvertDetailComponent,
    MenuVisitorComponent,
    SearchBarComponent,
    AdvertFilterPipe,
    AdvertFuelFilterPipe,
    AdvertOtherFilter,
    FuelTypeComponent,
    AdvertPricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
