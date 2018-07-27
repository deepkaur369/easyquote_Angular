import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerRegComponent } from './partner-reg.component';

describe('PartnerRegComponent', () => {
  let component: PartnerRegComponent;
  let fixture: ComponentFixture<PartnerRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
