import { Injectable } from '@angular/core';
import {CandidatureService} from './candidature.service';
import * as Excel from 'exceljs/dist/exceljs.min.js';
@Injectable({
  providedIn: 'root',
})
export class ExcelService {

  data = [];
  name: string;
  sName: string;
  excelFileName: string;
  // blobType: string = "text/plain;charset=utf-8";

  blobType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  cols = ['First Name', 'Last Name', 'Speciality', 'City', 'Email'];

  /* data=[{Email:"a1",FirstName:"b1",LastName:"c1",Speciality:"d1",City:"e1"},
         {Email:"a2",FirstName:"b2",LastName:"c2",Speciality:"d2",City:"e2"},
         {Email:"a3",FirstName:"b3",LastName:"c3",Speciality:"d3",City:"e3"},
         {Email:"a4",FirstName:"b4",LastName:"c4",Speciality:"d4",City:"e4"},
         {Email:"a5",FirstName:"b5",LastName:"c5",Speciality:"d5",City:"e5"}
         ]
 */
  constructor(private doctolibSer: CandidatureService) {
    this.doctolibSer.getDemandes().subscribe(
      data => {
        this.data = data;
      });
    this.sName = 'ResourcesList';
    this.excelFileName = 'ResourcesList.xlsx';
  }

  exportToExcel() {
    const workbook = new Excel.Workbook();
    workbook.creator = 'Rania';
    workbook.lastModifiedBy = 'Rania';
    workbook.created = new Date();
    workbook.modified = new Date();
    workbook.addWorksheet(this.sName, {
      views: [{
        state: 'frozen',
        ySplit: 3,
        xSplit: 2,
        activeCell: 'A1',
        showGridLines: false }] });
    const sheet = workbook.getWorksheet(1);
    const head1 = ['Exported Data'];
    sheet.addRow(head1);
    sheet.addRow('');
    sheet.getRow(3).values = this.cols;
    sheet.columns = [
      {key: 'firstName'},
      {key: 'lastName'},
      {key: 'specialite'},
      {key: 'ville'},
      {key: 'email'} ];
    sheet.addRows(this.data);
    workbook.xlsx.writeBuffer().then(data => {
      const blob = new Blob([data], {type: this.blobType});
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.href = url;
      a.download = this.excelFileName;
      a.click();
      // adding some delay in removing the dynamically created link solves the problem in FireFox
      // setTimeout(function() {window.URL.revokeObjectURL(url);},0);
      // FileSaver.saveAs(blob, this.excelFileName, true);
    });
  }
}
