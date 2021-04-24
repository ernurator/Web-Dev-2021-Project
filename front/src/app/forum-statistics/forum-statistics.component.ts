import {Component, OnInit} from '@angular/core';
import {StatisticsAPI} from '../models/statistics.api';
import {StatisticsService} from '../services/statistics.service';
import {LogService} from '../services/log.service';

@Component({
  selector: 'app-forum-statistics',
  templateUrl: './forum-statistics.component.html',
  styleUrls: ['./forum-statistics.component.css']
})
export class ForumStatisticsComponent implements OnInit {

  statistics: StatisticsAPI;

  constructor(private statisticsService: StatisticsService, private logService: LogService) {
  }

  ngOnInit(): void {
    this.getStatistics();
  }

  getStatistics(): void {
    this.statisticsService.getStatistics().subscribe(data => {
      this.statistics = data;
    }, error => this.logService.error(error));
  }

}
