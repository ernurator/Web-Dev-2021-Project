import {Component, OnInit} from '@angular/core';
import {UsersService} from '../services/users.service';
import {LogService} from '../services/log.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  constructor(private usersService: UsersService,
              private logService: LogService,
              private route: Router) {
  }

  ngOnInit(): void {
  }

  login(): void{
    this.password = this.password.trim();
    this.username = this.username.trim();
    if (!(this.username && this.password)) {
      window.alert('Password and username shouldn\'t be empty!');
      return;
    }

    this.usersService.login(this.username, this.password).subscribe((data) => {
      localStorage.setItem('token', data.token);
      this.username = '';
      this.password = '';
      this.route.navigate(['/home']);
    }, error => {
      this.logService.error(error);
      window.alert('Invalid credentials!');
    });
  }
}
