import {Component, OnInit} from '@angular/core';
import {posts} from '../posts';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  posts = posts;

  constructor() {
  }

  ngOnInit(): void {
  }

}
