import {Component, OnInit} from '@angular/core';
import {posts} from "../posts";
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../services/posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  topic: any;
  posts = posts;
  constructor(private route: ActivatedRoute, private postsService: PostsService) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const topicIDFromRoute = Number(routeParams.get('id'));
    // this.topic = topics.find(topic => topic.id === topicIDFromRoute);
  }
}
