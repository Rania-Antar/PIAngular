import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Answer} from '../Models/Answer';
import {Router} from '@angular/router';
import {QuestionAnswerService} from './question-answer.service';
import {Question} from '../Models';

@Component({
  selector: 'ngx-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss'],
})
export class QuestionAnswerComponent implements OnInit {

  Added = false ;
  show = false ;
  question: Question ;
  categorys = [];
  types = [];
  formQ: FormGroup;
  constructor(private fb: FormBuilder , public restApi: QuestionAnswerService, public router: Router) {
    this.formQ = this.fb.group({
      question : ['', Validators.required] ,
      score: ['', Validators.required]  ,
      types: ['', Validators.required] ,
      categorys: [''],
    });
    this.types = this.getTypes();
    this.categorys = this.getCategorys();
  }
  formA = this.fb.group({
    answer : ['', Validators.required] ,
    correct: [true] });
  ngOnInit() {}
  /*addQuestion() {
    this.restApi.addQuestion(this.activityTemplate).subscribe((data: {}) => {
      // this.router.navigate(['/employees-list'])
    });
  }
  addQ() {
    console.log('here');
    this.uploadedQuiz.activityList = this.uploadedQuiz.activityList.concat(this.activityTemplate);
  }
  removeQuestion(index) {
    this.uploadedQuiz.activityList.splice(index, 1);
  }*/
  getTypes() {
    return [
      {id: '1', name: 'RADIOBOX'},
      {id: '2', name: 'CHECKBOX'},
    ];
  }
  getCategorys(): any {
    this.restApi.getCategorys().subscribe(Data => {
      this.categorys = Data;
    });
  }
  OnSubmit() {
    let question = this.formQ.get('question').value ;
    let score = this.formQ.get('score').value;
    let type = this.formQ.get('types').value ;
    let category = this.formQ.get('categorys').value ;
    console.log('this is ' + question) ;

    this.restApi.addQuestion(new Question(question, score, type, category)).subscribe(
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
  changeValue() {
    console.log(this.formA.controls['correct'].value ? 'oui' : 'nom');
    this.formA.controls['correct'] = new FormControl(this.formA.controls['correct'].value);
  }
  OnSubmit2() {
    let answer = this.formA.get('answer').value ;
    let correct = this.formA.get('correct').value;
    let q = this.formQ.value;
    console.log('this answer ' + answer) ;

    this.restApi.addAnswer(new Answer(answer , correct, q)).subscribe(
      (data) => {
        console.log(data) ;
        this.Added = true ;
      }, error => {
        console.log(error);
      },
    );
  }

}
