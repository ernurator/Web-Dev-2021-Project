import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logged = false;
  constructor() {
  }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    const TOKEN = localStorage.getItem('token');
    if (TOKEN) {
      this.logged = true;
    }
  }

  logOut(): void {
    localStorage.removeItem('token');
    this.logged = false;
  }

}
