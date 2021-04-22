import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Topic} from '../models/topic';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  BASE_URL = 'http://127.0.0.1:8000/api/topics';
  constructor(private http: HttpClient) { }

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${this.BASE_URL}/`);
  }

  getTopic(id: number): Observable<Topic> {
    return this.http.get<Topic>(`${this.BASE_URL}/${id}/`);
  }
}
