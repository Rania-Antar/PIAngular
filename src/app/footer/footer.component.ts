import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ngx-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  @Output() nextQuestion: EventEmitter<number>  = new EventEmitter();
  @Input() totalQuestions;
  @Input() questionIndex;
  @Input() finished;
  constructor() { }

  ngOnInit() {
  }
  onNextQuestion() {
    this.nextQuestion.emit(1);
  }

}
