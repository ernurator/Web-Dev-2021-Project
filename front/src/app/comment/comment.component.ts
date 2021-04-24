import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from '../models/comment';
import {CommentsService} from '../services/comments.service';
import {LogService} from '../services/log.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  @Output() destroy = new EventEmitter();

  constructor(private commentsService: CommentsService, private logService: LogService) {
  }

  ngOnInit(): void {
  }

  like(): void {
    this.comment.likes += 1;
    this.commentsService.updateComment(this.comment).subscribe(comment => {
      this.comment = comment;
    }, error => {
      this.logService.error(error);
      this.comment.likes -= 1;
    });
  }

  delete(): void {
    this.commentsService.deleteComment(this.comment.id).subscribe(data => {
      this.destroy.emit(this.comment);
    }, error => this.logService.error(error));
  }
}
