import { NgModule } from '@angular/core';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { QqqComponent } from './qqq/qqq.component';
import { UserComponent } from '../user/user.component';
import {CandidatureListComponent} from '../candidature-list/candidature-list.component';
import { QuizComponent } from '../quiz/quiz.component';
import { ScoreComponent } from '../score/score.component';
import { InterviewComponent } from '../interview/interview.component';
import { SignUpComponent } from '../user/sign-up/sign-up.component';
import { SignInComponent } from '../user/sign-in/sign-in.component';
import { MainComponent } from '../main/main.component';
import { QuestionAnswerComponent } from '../question-answer/question-answer.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { LoadingComponent } from '../loading/loading.component';
import {ExcelService} from '../candidature-list/excel.service';
import { CandidateQuizComponent } from '../quiz/candidate-quiz/candidate-quiz.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbDatepickerModule, NgbModule, NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {AddComponent} from '../interview/add/add.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    HttpClientModule,
    ThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
  ],
  declarations: [
    PagesComponent,
    QqqComponent, UserComponent, CandidatureListComponent, QuizComponent, ScoreComponent,
    InterviewComponent, SignUpComponent, SignInComponent, MainComponent, QuestionAnswerComponent,
    FooterComponent, HeaderComponent, LoadingComponent, CandidateQuizComponent, AddComponent,
  ],
  providers: [ExcelService],
  // bootstrap: [AppComponent],
  // entryComponents: [NgbdModalContent],
})
export class PagesModule {
}
