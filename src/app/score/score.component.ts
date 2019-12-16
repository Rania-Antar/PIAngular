import {Component, Input, OnInit} from '@angular/core';
import {QuizService} from '../quiz/quiz.service';

@Component({
  selector: 'ngx-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  score: number;
  id: number = 1;
  @Input() totalQuestions;
  constructor(private service: QuizService) {
  }
  ngOnInit() {
      this.service.getScore(this.id).subscribe(
        data => {
          this.score = data;
        });
    }
}

