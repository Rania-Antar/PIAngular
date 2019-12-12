import { Injectable } from '@angular/core';
import {Candidature} from '../Models/Candidature';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Candidate} from '../Models/Candidate';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CandidatureService {

  private headers = new HttpHeaders().set('content-type', 'application/json');
  url = '/api/candidature' ;
  private dataSource = new BehaviorSubject<string>('default message');
  currentData = this.dataSource.asObservable();
  public selectedDoctor: Candidate ;

  constructor(private http: HttpClient ) { }

  getDemandes(): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.url);
  }
  deleteDemande(c: Candidature) {
    return this.http.put(this.url + '/reject?CandidatureId=' + c.id, c , {headers: this.headers}).pipe(
      retry(1),
      catchError(this.handleError)) ;
  }
  acceptDemande(c: Candidature) {
    return this.http.put(this.url + '/accept?CandidatureId=' + c.id , c , {headers: this.headers}).pipe(
      retry(1),
      catchError(this.handleError)) ;
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
