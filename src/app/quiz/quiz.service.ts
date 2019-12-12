import { Injectable } from '@angular/core';
import {Quiz} from '../Models';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CandidateQuiz} from '../Models/CandidateQuiz';
import {Candidate} from '../Models/Candidate';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {

  url = '/api/quiz' ;
  urlCQ = '/api/candidate-quiz' ;
  urlC = '/api/candidature/candidate' ;
  private headers = new HttpHeaders().set('content-type', 'application/json');
  constructor(private http: HttpClient ) { }

  get(url: string) {
    return this.http.get(url);
  }
  getQuizs(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.url);
  }
  getQuiz(idQuiz: number) {
    return this.http.get<Quiz>(this.url + '/' + idQuiz);
  }
  getScore(idQuiz: number) {
    return this.http.get<number>(this.urlCQ + '/' + idQuiz + '/score');
  }
  deleteQuiz(idQuiz: number) {
    return this.http.delete(this.url + '/'  + idQuiz ) ;
  }
  modifierQuiz(q: Quiz) {
    return this.http.put(this.url, q) ;
  }
  addQuiz(q: Quiz) {
    return this.http.post(this.url, q, {headers: this.headers}) ;
  }
  randomQuiz(q: Quiz) {
    return this.http.post(this.url + '/random', q, {headers: this.headers}) ;
  }
  searchQuizs() {
    return this.http.get<Quiz[]>(this.url + '/recherche');
  }
  addCandidateQuiz(cq: CandidateQuiz) {
    return this.http.post(this.urlCQ, cq, {headers: this.headers}) ;
  }
  getCandidate(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.urlC);
  }
}
