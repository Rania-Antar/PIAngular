export class Candidature {
  id: number;
  state: string;
  candidate: any;
  offre: any;
  // interviews: any[];
  constructor(state, candidate, offre) {
    this.state = state;
    this.candidate = candidate;
    this.offre = offre;
  }


}
