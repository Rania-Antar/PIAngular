import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatureListComponent } from './candidature-list.component';

describe('CandidatureListComponent', () => {
  let component: CandidatureListComponent;
  let fixture: ComponentFixture<CandidatureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatureListComponent ]})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
