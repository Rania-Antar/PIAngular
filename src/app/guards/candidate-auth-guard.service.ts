import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandidateAuthGuardService implements CanActivate {

  constructor( private route: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if ((localStorage.getItem('role') === 'CANDIDATE') && (localStorage.getItem('loggedIn') === 'true')) {
      return true ;
    } else {
      this.route.navigate(['login']) ;
    }
    return false ;
  }
}
