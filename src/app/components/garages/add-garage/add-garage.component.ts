import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Garage } from 'src/app/models/garage';
import { User } from 'src/app/models/user';
import { GaragesService } from 'src/app/services/garages.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-garage',
  templateUrl: './add-garage.component.html',
  styleUrls: ['./add-garage.component.css']
})
export class AddGarageComponent implements OnInit {

  userList : User[];
  //recuperer l'id de ce user
  user: User;
  garage : Garage;
  isLoading: boolean;
  constructor(private activatedRoute: ActivatedRoute, private userService: UsersService, private garageService : GaragesService, private router : Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.userService.getAll().subscribe(userlist => {
      this.userList = userlist['hydra:member'];
    this.garage = new Garage();
    });
  }

  submitGarage():void{
    console.log(this.submitGarage);
    this.garageService.add(this.garage).subscribe(data=>{
      this.router.navigate(['/menuGarageOwner']);
    });
  }

}

