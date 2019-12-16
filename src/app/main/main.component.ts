import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import * as Webcam from 'webcamjs';
import {Question} from '../Models';
import {Answer} from '../Models/Answer';
import {QuestionAnswerService} from '../question-answer/question-answer.service';
@Component({
  selector: 'ngx-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  @Input() questions: Question[];
  @Input() choices;
  @Input() answers: Answer[];
  @Input() questionIndex;
  @Input() totalQuestions;
  @Input() finished;
  @Output() clickAnswer: EventEmitter<object>  = new EventEmitter();
  @Input() selectedIndex;
  fish: boolean;
  webCamError;
  constructor(private service: QuestionAnswerService ) {
    this.selectedIndex = 0;
  }
  getAnswers(id: number) {
    this.service.getQuestionAnswers(id).subscribe(
      data => {
        this.answers = data;
      });
  }
  enableCam() {
    // alert("setting webcam");



    Webcam.set({
      width: 240,
      height: 220,
      image_format: 'jpeg',
      jpeg_quality: 90 });

    Webcam.on( 'error', function(err) {
      // an error occurred (see 'err')
      this.webCamError = true;
    } );

    const w = Webcam.attach( '#my_camera' );

    if (w) {
      // alert("ok");
    } else {
      // this.webCamError = true;
      // alert("not ok");
    }

  }

  ngOnInit() {

  }

  // ngAfterViewInit() {
    // this.enableCam(); }

  clickChoice(e) {
    // alert(e.target.id);

    // this.selectedIndex = parseInt(e.target.id.replace("choice",""));
    // alert(this.selectedIndex);
    this.clickAnswer.emit(e);

  }
  onNextQuestion() {
    this.finished = true;
  }

}
