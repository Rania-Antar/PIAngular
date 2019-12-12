import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {QuestionAnswerService} from '../question-answer/question-answer.service';
import {Question} from '../Models';
import {Answer} from '../Models/Answer';

@Component({
  selector: 'ngx-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {

  title = 'Pidev';
  questions: Question[];
  question: Question;
  choices;
  questionIndex;
  answers: Answer[];
  totalQuestions;
  selectedIndex;
  finished;
  answered;
  score;
  constructor(private service: QuestionAnswerService ) {
    this.questionIndex = 0;

    this.finished = false;
    this.answered = false;
    this.score = 0;
  }

  ngOnInit() {
    this.service.getQuestions().subscribe(
      data => {
       // console.log(data);
        this.questions = data;
        this.totalQuestions = this.questions.length;
      });
  }
  getAnswers(id: number) {
    this.service.getQuestionAnswers(id).subscribe(
      data => {
        this.answers = data;
      });
  }

  resetQuiz() {
    this.questionIndex = 0;
    this.finished = false;
    this.answered = false;
    this.score = 0;
  }
  nextQuestion() {

    if (this.finished) {
      // Retake the Quiz
      this.resetQuiz();

    } else {

      if (!this.answered) {
        alert('Please select an answer.');
        return;
      }

      this.answered = false;
      this.checkAnswer(this.selectedIndex);

      this.selectedIndex = -1;
      if (this.questionIndex < this.totalQuestions - 1) {
        this.questionIndex++;
      } else {
        this.finished = true;
      }
    }
  }

  clickAnswer(e) {
    // alert(e.target.id)
    this.answered = true;
    this.selectedIndex = parseInt(e.target.id.replace("choice",""));
  }

  checkAnswer( selectedIndex ) {
    if (this.answers[this.questionIndex] == selectedIndex) {
      // Answer is correct
      this.score++;
    }
  }



}
