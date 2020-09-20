import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvertsComponent } from './components/adverts/adverts.component';
import { GaragesComponent } from './components/garages/garage-list/garage-list.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { UserComponent } from './components/user/user.component';
import { AddBrandComponent } from './components/brands/add-brand/add-brand.component';
import { ModelcarListComponent } from './components/modelcar/modelcar-list/modelcar-list.component';
import { BrandListComponent } from './components/brands/brand-list/brand-list.component';
import { ModelcarAddComponent } from './components/modelcar/modelcar-add/modelcar-add.component';
import { MenuGarageOwnerComponent } from './components/menu-garage-owner/menu-garage-owner.component';
import { TempMenuComponent } from './components/temp-menu/temp-menu.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VisitorComponent } from './components/visitor/visitor.component';
import { AddGarageComponent } from './components/garages/add-garage/add-garage.component';
import { AddAdvertComponent } from './components/adverts/add-advert/add-advert.component';
import { AdvertDetailComponent } from './components/adverts/advert-detail/advert-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tempMenu', component: TempMenuComponent},
  { path: 'menuAdmin', component: MenuAdminComponent},
  { path: 'menuGarageOwner', component: MenuGarageOwnerComponent},
  { path: 'visitor', component: VisitorComponent},
  { path: 'modelcar/list', component: ModelcarListComponent},
  { path: 'garages/list', component: GaragesComponent},
  { path: 'brands/list', component: BrandListComponent},
  { path: 'adverts/list', component: AdvertsComponent},
  { path: 'users/list', component: UserComponent},
  { path: 'addBrand', component: AddBrandComponent},
  { path: 'addCarModel', component: ModelcarAddComponent},
  { path: 'addGarage', component: AddGarageComponent},
  { path: 'addAdvert', component: AddAdvertComponent},
  { path: 'advertDetail/:id', component: AdvertDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
