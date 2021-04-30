import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../models/post';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {
  }

  getTopicPosts(topicId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.BASE_URL}/topics/${topicId}/posts/`);
  }

  getNewTopics(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.BASE_URL}/new-topics/`);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.BASE_URL}/posts/${id}/`);
  }

  addPost(data: object): Observable<Post> {
    return this.http.post<Post>(`${this.BASE_URL}/posts/`, data);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.BASE_URL}/posts/${post.id}/`, post);
  }
}
