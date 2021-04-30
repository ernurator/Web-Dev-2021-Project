import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Comment} from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {
  }

  getPostComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.BASE_URL}/posts/${postId}/comments/`);
  }

  addComment(postId: number, data: object): Observable<Comment> {
    return this.http.post<Comment>(`${this.BASE_URL}/posts/${postId}/comments/`, data);
  }

  updateComment(comment: Comment): Observable<Comment> {
    return this.http.put<Comment>(`${this.BASE_URL}/comments/${comment.id}/`, comment);
  }

  deleteComment(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/comments/${id}/`);
  }
}
