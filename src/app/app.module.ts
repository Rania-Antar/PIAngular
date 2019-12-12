/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbDatepickerModule, NgbModule, NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbCardModule,
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule, NbIconModule, NbInputModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule, NbTreeGridModule,
  NbWindowModule,
} from '@nebular/theme';
import {QuizComponent} from './pages/quiz/quiz.component';
import {TablesRoutingModule} from './pages/tables/tables-routing.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';


@NgModule({
  declarations: [AppComponent, QuizComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

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
    CoreModule.forRoot(),
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
  ],
  // providers: [ExcelService],
  bootstrap: [AppComponent],
  // entryComponents: [NgbdModalContent],
})
export class AppModule {
}
