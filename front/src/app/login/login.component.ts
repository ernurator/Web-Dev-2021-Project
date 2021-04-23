import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  login(): void{
    this.usersService.login(this.username, this.password).subscribe((data) => {
      localStorage.setItem('token', data.token);
      this.username = '';
      this.password = '';
    }, error => {
      console.log(error);
    });
  }
}
