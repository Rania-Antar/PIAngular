import { Component, OnInit } from '@angular/core';
import {Interview} from '../../Models/Interview';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {InterviewService} from '../interview.service';

@Component({
  selector: 'ngx-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  Added = false ;
  show = false ;
  interview: Interview ;
  formQ: FormGroup;
  constructor(private fb: FormBuilder , public restApi: InterviewService, public router: Router) {
    this.formQ = this.fb.group({
      date : ['', Validators.required] ,
      time : ['', Validators.required] ,
    });
  }

  ngOnInit() {
  }
  OnSubmit() {
    // let date = this.formQ.get('date').value ;
    const time = this.formQ.get('time').value;

    this.restApi.addInterview(new Interview('2020-01-20', time)).subscribe(
      (data) => {
        // console.log(data) ;
        this.Added = true ;
      }, error => {
        // console.log(error);
      },
    );
  }
  showed() {
    this.show = true;
  }
}
