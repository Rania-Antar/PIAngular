import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import {QqqComponent} from './qqq/qqq.component';
import {ScoreComponent} from '../score/score.component';
import {InterviewComponent} from '../interview/interview.component';
import {CandidatureListComponent} from '../candidature-list/candidature-list.component';
import {CandidateQuizComponent} from '../quiz/candidate-quiz/candidate-quiz.component';
import {MainComponent} from '../main/main.component';
import {QuizComponent} from '../quiz/quiz.component';
import {UserComponent} from '../user/user.component';
import {SignUpComponent} from '../user/sign-up/sign-up.component';
import {SignInComponent} from '../user/sign-in/sign-in.component';
import { AddComponent } from '../interview/add/add.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'qqq',
      component: QqqComponent,
    },
    {
      path: 'signup', component: UserComponent,
      children: [{ path: '', component: SignUpComponent }],
    },
    {
      path: 'signin', component: UserComponent,
      children: [{ path: '', component: SignInComponent }],
    },
    // {path: '', redirectTo: '/signup', pathMatch: 'full'},
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
      path: 'quiz/score', component: ScoreComponent,
    },
    {
      path: 'interview', component: InterviewComponent,
    },
    {
      path: 'quiz/score/interview', component: AddComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
