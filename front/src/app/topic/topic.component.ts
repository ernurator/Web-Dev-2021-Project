import {Component, OnInit} from '@angular/core';
import {posts} from '../posts';
import {Topic} from '../models/topic';
import {Post} from '../models/post';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../services/posts.service';
import {TopicsService} from '../services/topics.service';
import {LogService} from '../services/log.service';
import {topics} from '../topics';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  topic: Topic;
  posts: Post[];

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private topicsService: TopicsService,
    private logService: LogService) {
    this.posts = posts;
    this.topic = topics[0];
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.loadPosts(id);
      this.loadTopic(id);
    });
  }

  loadTopic(id: number): void {
    this.topicsService.getTopic(id).subscribe(data => {
      this.topic = data;
    }, error => this.logService.error(error));
  }

  loadPosts(id: number): void {
    this.postsService.getTopicPosts(id).subscribe(data => {
      this.posts = data;
    }, error => this.logService.error(error));
  }
}
