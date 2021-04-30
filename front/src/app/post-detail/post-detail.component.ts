import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../services/posts.service';
import {CommentsService} from '../services/comments.service';
import {Post} from '../models/post';
import {Comment} from '../models/comment';
import {LogService} from '../services/log.service';
// import {posts} from '../posts';
// import {comments} from '../comments';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  comments: Comment[];
  newComment = '';

  constructor(private route: ActivatedRoute,
              private postsService: PostsService,
              private commentService: CommentsService,
              private logService: LogService) {
    this.comments = [];
  }

  like(): void {
    this.post.likes += 1;
    this.postsService.updatePost(this.post).subscribe(post => {
      this.post = post;
    }, error => {
      this.logService.error(error);
      this.post.likes -= 1;
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.getPost(id);
      this.getPostComments(id);
    });
  }

  getPost(id: number): void {
    this.postsService.getPost(id).subscribe(data => {
      this.post = data;
    }, error => this.logService.error(error));
  }

  getPostComments(id: number): void {
    this.commentService.getPostComments(id).subscribe(data => {
      // @ts-ignore
      this.comments = data;
    }, error => this.logService.error(error));
  }

  sendComment(): void {
    this.newComment = this.newComment.trim();
    if (!this.newComment) {
      return;
    }
    const comment = {
      // TODO add comment creation interface
      text: this.newComment,
    };
    this.commentService.addComment(this.post.id, comment).subscribe(data => {
      this.comments.push(data);
      this.newComment = '';
    }, error => this.logService.error(error));
  }

  destroy(comment: Comment): void {
    this.comments = this.comments.filter(com => com !== comment);
  }
}
