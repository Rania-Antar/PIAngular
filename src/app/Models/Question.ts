import { Option } from './option';
import {CandidateAnswer} from './CandidateAnswer';
import {Answer} from './Answer';
import {Quiz} from './quiz';

export class Question {
  // id: number;
  question: string;
  type: string;
  score: number;
  // candidateAnswer: CandidateAnswer;
  answers: Answer[];
  quiz: Quiz;
  category: {
    // id: number;
    name: string;
  };
  //questions: Array<string>;
  //choices: Array<any>;
  //answers: Array<number>;
  id: number;
  name: string;
  questionTypeId: number;
  options: Option[];
  answered: boolean;

  constructor(question , score, type , category) {
    this.question = question ;
    this.score = score ;
    this.type = type ;
    this.category = category ;
  }
}
