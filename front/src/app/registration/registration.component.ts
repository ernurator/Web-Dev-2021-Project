import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  email = '';
  password = '';
  username = '';

  ngOnInit(): void {
  }

  constructor(private usersService: UsersService) { }


  register(): void{
    this.usersService.register(this.username, this.password, this.email).subscribe((data) => {
      console.log('Good');
    }, error => {
      console.error('Not good');
    });
  }

}
