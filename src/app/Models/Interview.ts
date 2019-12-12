import {Time} from '@angular/common';

export class Interview {
  id: number;
  date: Date;
  time: Time;

  constructor(date, time) {
    this.date = date;
    this.time = time;
  }

}
