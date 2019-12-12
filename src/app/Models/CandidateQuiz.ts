import {Candidate} from './Candidate';
import {Quiz} from './quiz';

export class CandidateQuiz {
  id: number;
  passingDate: Date;
  quiz: Quiz;
  candidate: any;
  // state: string;
  constructor(passingDate, candidate, quiz) {
    this.passingDate = passingDate;
    this.candidate = candidate;
    this.quiz = quiz;
  }
}

