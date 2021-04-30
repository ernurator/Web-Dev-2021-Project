import {Component, OnInit} from '@angular/core';
import {Topic} from '../models/topic';
import {TopicsService} from '../services/topics.service';
import {LogService} from '../services/log.service';
// import {topics} from '../topics';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics: Topic[];

  constructor(private topicsService: TopicsService,
              private logService: LogService) {
    this.topics = [];
  }

  ngOnInit(): void {
    this.getTopics();
  }

  getTopics(): void {
    this.topicsService.getTopics().subscribe(data => {
      this.topics = data;
    }, error => this.logService.error(error));
  }

}
