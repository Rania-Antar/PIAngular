import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CandidateQuiz} from '../../Models/CandidateQuiz';
import {QuizService} from '../quiz.service';
import {Candidate} from '../../Models/Candidate';
import { NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'ngx-candidate-quiz',
  templateUrl: './candidate-quiz.component.html',
  styleUrls: ['./candidate-quiz.component.scss'],
})
export class CandidateQuizComponent implements OnInit {
  Added = false ;
  show = false ;
  candidateQuiz: CandidateQuiz ;
  candidate = [{
    id: 1,
  }];
  quizs = [];
  formQ: FormGroup;
  constructor(private fb: FormBuilder , public restApi: QuizService, public router: Router) {
    this.formQ = this.fb.group({
      passingDate : ['', Validators.required] ,
      candidate : ['', Validators.required] ,
      quizs: ['', Validators.required],
    });
    this.quizs = this.getCategorys();
    this.candidate = this.getCandidates();
  }

  ngOnInit() {
  }

  getCategorys(): any {
    this.restApi.getQuizs().subscribe(Data => {
      this.quizs = Data;
    });
  }
  getCandidates(): any {
    this.restApi.getCandidate().subscribe(Data => {
      this.candidate = Data;
    });
  }
  OnSubmit() {
    let passingDate = this.formQ.get('passingDate').value.toString() ;
    let quizs = this.formQ.get('quizs').value;
    let candidate = this.formQ.get('candidate').value ;
    console.log('this is ' + candidate) ;

    this.restApi.addCandidateQuiz(new CandidateQuiz("2019-12-20", this.candidate, quizs)).subscribe(
      (data) => {
        console.log(data) ;
        this.Added = true ;
      }, error => {
        console.log(error);
      },
    );
  }
  showed() {
    this.show = true;
  }

}
