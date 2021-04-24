import {Component, OnInit} from '@angular/core';
import {UsersService} from '../services/users.service';
import {LogService} from '../services/log.service';
import {User} from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  errorMessage = '';
  user: User = {
    username: 'Useruser',
    bio: 'some bio',
    id: 1,
  };

  constructor(private usersService: UsersService, private logService: LogService) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getLetter(): string {
    return this.user?.username.charAt(0).toUpperCase() || '☠';
  }

  getUser(): void {
    this.usersService.getProfile().subscribe(user => {
      this.user = user;
    }, error => {
      this.errorMessage = error.message;
      this.logService.error(error);
    });
  }

  updateUser(): void {
    this.usersService.updateUser(this.user).subscribe(user => {
      this.user = user;
    }, error => {
      this.getUser();
      this.errorMessage = error.message;
      this.logService.error(error);
    });
  }
}
