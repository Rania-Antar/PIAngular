import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import {UserComponent} from './user/user.component';
import {SignUpComponent} from './user/sign-up/sign-up.component';
import {SignInComponent} from './user/sign-in/sign-in.component';
import {MainComponent} from './main/main.component';
import {InterviewComponent} from './interview/interview.component';
import {ScoreComponent} from './score/score.component';
import {CandidatureListComponent} from './candidature-list/candidature-list.component';
import {QuizComponent} from './quiz/quiz.component';
import {CandidateQuizComponent} from './quiz/candidate-quiz/candidate-quiz.component';
import {QqqComponent} from './pages/qqq/qqq.component';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('app/pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
  ];
  /*{
    path: 'rania',
    loadChildren: () => import('app/app.module')
      .then(m => m.AppModule),
  },
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }],
  },
  {
    path: 'signin', component: UserComponent,
    children: [{ path: '', component: SignInComponent }],
  },
   {path: '', redirectTo: '/signup', pathMatch: 'full'},
  {
    path: 'main', component: MainComponent,
  },
  {
    path: 'quiz', component: QuizComponent,
  },
  {
    path: 'Candidatequiz', component: CandidateQuizComponent,
  },
  {
    path: 'candidature', component: CandidatureListComponent,
  },
  {
    path: 'score', component: ScoreComponent,
  },
  {
    path: 'interview', component: InterviewComponent,
  },
];*/

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
