import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Comment} from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  BASE_URL = 'http://127.0.0.1:8000/api/posts';
  constructor(private http: HttpClient) { }

  getPostComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.BASE_URL}/${postId}/comments/`);
  }

  addComment(postId: number, data: object): Observable<Comment> {
    return this.http.post<Comment>(`${this.BASE_URL}/${postId}/comments/`, data);
  }
}
