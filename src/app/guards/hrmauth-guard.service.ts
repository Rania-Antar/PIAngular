import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../user/user.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HRMAuthGuardService implements CanActivate {

  constructor(private serviceUser: UserService , private route: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if ((localStorage.getItem('role') == 'CHIEF_HUMAN_RESOURCES_OFFICER') &&
      (localStorage.getItem('loggedIn') == 'true')) {
      return true ;
    } else {
      this.route.navigate(['login']) ;
    }
    return false ;
  }
}
