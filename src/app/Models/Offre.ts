import {Candidature} from "./Candidature";
import {User} from "./User";
import {Quiz} from "./quiz";

export class Offre {
  id: number ;
  name: string ;
  desciption: string ;
  Location: string ;
  diplome: string;
  date: Date;
  candidatures: Candidature[];
  users: User[];
  user: User;
  quizs: Quiz[];

}
