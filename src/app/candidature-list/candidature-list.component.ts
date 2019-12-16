import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Candidature} from '../models/Candidature';
import {CandidatureService} from './candidature.service';
import {ExcelService} from './excel.service';
/*@Component({
  selector: 'ngx-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Candidature is Accepted</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <div class="list_general">
  <ul>
    <li>
      <h4>Schedule a Quiz for the selected candidate</h4>
    </li>
  </ul>
        <div class="col-md-4 center-block">
        <input type="button" class="btn btn-info" routerLink="Candidatequiz"
        value="Select Quiz" (click)="activeModal.close('Close click')">
        </div>
</div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `},
  )
export class NgbdModalContent {
  @Input() candidate;

  constructor(public activeModal: NgbActiveModal) {}
} */
@Component({
  selector: 'ngx-candidature-list',
  templateUrl: './candidature-list.component.html',
  styleUrls: ['./candidature-list.component.scss'],
})
export class CandidatureListComponent implements OnInit, OnChanges {

  loading: boolean = false;
  accepted: boolean = false;
  demande: Candidature = {
    id: 0,
    state: '',
    offre: {
      name: '',
      description: '',
      diplome: '',
    },
    candidate: {
      id: 0,
      firstname: '',
      lastname: '',
      email: '',
    },
  };
  addedCandidate: Object;
  listDemandes = [];

  constructor(private service: CandidatureService, private modalService: NgbModal, private excel: ExcelService) {
  }

  ngOnInit() {
    this.service.getDemandes().subscribe(
      Data => {
        this.listDemandes = Data;
      });
  }

  ngOnChanges() {
    this.service.getDemandes().subscribe(
      Data => {
        this.listDemandes = Data;
      });
  }

  Cancel(dem) {
    this.demande = dem;
    // console.log('selected is ' + this.demande.id);
    this.service.deleteDemande( this.demande ).subscribe(
      (data) => {
        if (data) {
            this.listDemandes.splice(this.listDemandes.indexOf(this.demande), 1);
          }
        // this.demands.splice(this.demands.indexOf(demand), 1);
      });
  }

  Approve(dem) {
    this.loading = true;
    this.demande = dem;
    this.service.acceptDemande(this.demande).subscribe(
      (data) => {
              // this.accepted = true ;
              this.loading = false;
              // console.log(data);
              this.addedCandidate = data;
              this.listDemandes.splice(this.listDemandes.indexOf(this.demande), 1);
              // const modalRef = this.modalService.open(NgbdModalContent, {size: 'lg'});
             //  modalRef.componentInstance.doctor = this.addedCandidate;
      }
      , (error) => {
        this.loading = false;
        alert('An error has occured');
      });
  }

  exportToExcel() {
   // console.log('exported');
    this.excel.exportToExcel();
  }
}
