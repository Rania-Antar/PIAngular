import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Interview} from '../Models/Interview';

@Injectable({
  providedIn: 'root',
})
export class InterviewService {
  url = '/api/interview' ;
  private headers = new HttpHeaders().set('content-type', 'application/json');
  constructor(private http: HttpClient ) { }

  get(url: string) {
    return this.http.get(url);
  }
  getInterviews(): Observable<Interview[]> {
    return this.http.get<Interview[]>(this.url);
  }
  deleteInterview(id: number) {
    return this.http.delete(this.url + '/'  + id) ;
  }
  modifierInterview(q: Interview) {
    return this.http.put(this.url, q) ;
  }
  addInterview(q: Interview) {
    return this.http.post(this.url, q, {headers: this.headers}) ;
  }
}
