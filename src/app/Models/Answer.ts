import {Question} from './Question';
import {CandidateAnswer} from './CandidateAnswer';

export class Answer {
  id: number;
  answer: string;
  correct: boolean;
  question: Question;
  candidateAnswer: CandidateAnswer;
  constructor(answer, correct, question ) {
    this.answer = answer;
    this.correct = correct;
    this.question = question;
  }
}
