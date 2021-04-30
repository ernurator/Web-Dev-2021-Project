import {Component, OnInit} from '@angular/core';
import {UsersService} from '../services/users.service';
import {LogService} from '../services/log.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  username = '';
  firstName = '';
  lastName = '';
  email = '';
  password = '';

  constructor(private usersService: UsersService,
              private logService: LogService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.checkUser();
  }

  checkUser(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.route.navigate(['/home']);
    }
  }

  register(): void{
    this.email = this.email.trim();
    this.password = this.password.trim();
    this.username = this.username.trim();
    if (!(this.username && this.password && this.email)) {
      window.alert('Email, password and username shouldn\'t be empty!');
      return;
    }

    this.usersService.register(this.username, this.firstName, this.lastName,
      this.password, this.email)
      .subscribe((data) => {
        localStorage.setItem('token', data.token);
        this.username = '';
        this.email = '';
        this.lastName = '';
        this.firstName = '';
        this.password = '';
        location.reload();
      }, error => {
        this.logService.error(error);
        window.alert('Registration wasn\'t accomplished, please register again!');
      });
  }

}
