import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  errorMessage: string;
  username: string;
  bio: string;

  // TODO inject service (and create it)
  constructor() {
  }

  ngOnInit(): void {
  }

  getLetter(): string {
    return this.username?.charAt(0).toUpperCase() || '☠';
  }

}
