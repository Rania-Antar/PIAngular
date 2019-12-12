import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../Models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  url = '/api/user/' ;
  selectedUser: User = {
    login: '',
    email: '',
    password: '',
  };
  private isLoggedIn = false ;

  constructor(private http: HttpClient) { }
  postUser(user: User) {
    return this.http.post(this.url + 'add?username=' + user.login + '&email=' + user.email + '&password='
                                       + user.password , user);
  }
  login(email , password) {
    localStorage.setItem('loggedIn', 'true') ;
    this.isLoggedIn = true;
    return this.http.get(this.url + 'authenticate?email=' + email + '&password=' + password);
  }
  logout(user: User) {
    localStorage.setItem('loggedIn', 'false') ;
    this.isLoggedIn = false;
    return this.http.put(this.url + 'logout', user );
  }
}
