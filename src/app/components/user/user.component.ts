import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : User[];
  isLoading : boolean;

  constructor(private userService : UsersService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.userService.getAll().subscribe(then => {
      this.users = then['hydra:member'];
      this.isLoading = false;
    });
  }

}
