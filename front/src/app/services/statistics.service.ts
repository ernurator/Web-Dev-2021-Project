import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StatisticsAPI} from '../models/statistics.api';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  BASE_URL = 'http://127.0.0.1:8000/api/forum-statistics';

  constructor(private http: HttpClient) {
  }

  getStatistics(): Observable<StatisticsAPI> {
    return this.http.get<StatisticsAPI>(`${this.BASE_URL}/`);
  }
}
