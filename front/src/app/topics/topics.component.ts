import {Component, OnInit} from '@angular/core';
import {Topic} from '../models/topic';
import {topics} from '../topics';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics: Topic[];

  constructor() {
    this.topics = topics;
  }

  ngOnInit(): void {
  }

}
