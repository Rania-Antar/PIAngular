import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QqqComponent } from './qqq.component';

describe('QqqComponent', () => {
  let component: QqqComponent;
  let fixture: ComponentFixture<QqqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
