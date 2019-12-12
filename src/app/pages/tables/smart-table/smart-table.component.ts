import {Component, OnInit} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import {InterviewService} from '../../../interview/interview.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      Date: {
        title: 'Date',
        type: 'string',
      },
      Time: {
        title: 'Time',
        type: 'string',
      },
    },
  };

  source: Object = new LocalDataSource();

  constructor(private service: InterviewService) {
  }
  ngOnInit() {
  this.service.getInterviews().subscribe(
    response => {
      console.log('Found');
      this.source = response;
    console.log(response); },
    error => {
      console.log('NOT Found');
      console.log(error);
    },
  );
}
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
