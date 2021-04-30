import {Component, OnInit} from '@angular/core';
import {Topic} from '../models/topic';
import {TopicsService} from '../services/topics.service';
import {PostsService} from '../services/posts.service';
import {LogService} from '../services/log.service';
import {Router} from '@angular/router';
// import {User} from '../models/user';
// import {UsersService} from '../services/users.service';
// import {topics} from '../topics';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  postText = '';
  title = '';
  message = 'We would like to personally thank you for joining our community!';
  selectedTopic: Topic;
  topics: Topic[];

  constructor(private topicsService: TopicsService,
              private postsService: PostsService,
              private logService: LogService,
              private route: Router) {
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

  createPost(): void {
    this.title = this.title.trim();
    this.postText = this.postText.trim();
    if (!this.title || !this.postText || !this.selectedTopic) {
      this.message = 'Post title and content shouldn\'t be empty, and you should select the topic!';
      return;
    }

    // TODO add post-creation interface
    const data = {
      header: this.title,
      text: this.postText,
      topic_id: this.selectedTopic.id,
    };
    this.postsService.addPost(data).subscribe(post => {
      this.message = `Post was created with id ${post.id}!`;
      this.title = '';
      this.postText = '';
      this.selectedTopic = undefined;
      setTimeout(() => {
        this.route.navigate(['/', 'posts', post.id]);
      }, 1000);
    }, error => {
      this.logService.error(error);
      this.message = error.message + (error.error ? ` (${JSON.stringify(error.error)})` : '');
    });
  }
}
