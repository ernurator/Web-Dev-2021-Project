import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { posts } from '../posts';
import { PostsService} from "../services/posts.service";
import { CommentsService} from "../services/comments.service";
import { Post } from "../models/post";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: any;
  commentsList: any;
  constructor(private route: ActivatedRoute,
              private postsService: PostsService,
              private commentService: CommentsService) { }

  like(post: any){
    post.likes += 1;
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const postIDFromRoute = Number(routeParams.get('id'));
    this.post = posts.find(post => post.id === postIDFromRoute);

    // this.getPost(this.post.id);
    // this.getPostComments(this.post.id);
  }

  getPost(id: number): void{
    this.postsService.getPost(id).subscribe(data => {
      this.post = data;
    }, error => {
      console.error(error);
    });
  }

  getPostComments(id: number): void{
    this.commentService.getPostComments(id).subscribe(data => {
      this.commentsList = data;
    }, error => {
      console.error(error);
    });
  }

}
