import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  developers: string[][];
  constructor() {
    this.developers = [
      ['Issenbayev Yernur', 'ernurator'],
      ['Shamoi El\'vina', 'elvina_s'],
      ['Turdybay Akniyet', 'tuerdisan']
    ];
  }

  ngOnInit(): void {
  }

  getTelegramLink(username: string): string {

    return `https://t.me/${username}`;
  }

}
