import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {NgForm} from '@angular/forms';
import {NbAuthSocialLink} from '@nebular/auth';

@Component({
  selector: 'ngx-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  showSucessMessage: boolean = false;
  serverErrorMessages: string;
  user: any;
  submitted: boolean;
  socialLinks: NbAuthSocialLink[];
  errors: string[];
  messages: string[];
  constructor(private userService: UserService, private router: Router) { }
  model = {
    email : '',
    password: '',
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    let email = form.controls['email'].value;
    let password = form.controls['password'].value;
    this.userService.login(email, password).subscribe(
      res => {
        this.showSucessMessage = true;
        this.submitted = true;
        this.router.navigateByUrl('/quiz');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      });
  }

}
