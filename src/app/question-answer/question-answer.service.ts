import { Injectable } from '@angular/core';
import {Category} from '../Models/Category';
import {Observable, throwError} from 'rxjs';
import {Answer} from '../Models/Answer';
import {Question} from '../Models';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QuestionAnswerService {

  url = '/api/question' ;
  urlC = '/api/category' ;
  urlA = '/api/answer' ;
  private headers = new HttpHeaders().set('content-type', 'application/json');
  constructor(private http: HttpClient ) { }

  getQuestions() {
    return this.http.get<Question[]>(this.url);
  }
  getQuestion(idQuestion: number) {
    return this.http.get<Question>(this.url + '/' + idQuestion);
  }
  deleteQuestion(idQuestion: number) {
    return this.http.delete(this.url + '/' + idQuestion ) ;
  }
  modifierQuestion(q: Question) {
    return this.http.put(this.url, q) ;
  }
  addQuestion(q: Question) {
    return this.http.post(this.url, q, {headers: this.headers}).pipe(
      retry(1),
      catchError(this.handleError)) ;
  }
//  *******************************************************************************************************************
  getAnswers(): Observable<Answer[]> {
    return this.http.get<Answer[]>(this.urlA);
  }
  getAnswer(idAnswer: number) {
    return this.http.get<Answer>(this.urlA + '/' + idAnswer);
  }
  deleteAnswer(idAnswer: number) {
    return this.http.delete(this.urlA + '/' + idAnswer ) ;
  }
  modifierAnswer(q: Answer) {
    return this.http.put(this.urlA, q) ;
  }
  addAnswer(q: Answer) {
    return this.http.post(this.urlA, q, {headers: this.headers}) ;
  }
  //  ****************************************************************************************************
  getCategorys(): Observable<Category[]> {
    return this.http.get<Category[]>(this.urlC);
  }
  getQuestionAnswers(idQuestion: number): Observable<Answer[]> {
    return this.http.get<Answer[]>(this.urlA + '/question/' + idQuestion);
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
