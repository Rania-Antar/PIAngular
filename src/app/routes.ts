import { Routes } from '@angular/router';
import {SignInComponent} from './user/sign-in/sign-in.component';
import {UserComponent} from './user/user.component';
import {SignUpComponent} from './user/sign-up/sign-up.component';
import {MainComponent} from './main/main.component';


export const appRoutes: Routes = [
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]},
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]},
  {
    path: '', redirectTo: '/signup', pathMatch: 'full'},
  {
    path: 'quiz', component: MainComponent},
];
