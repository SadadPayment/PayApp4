import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceInquiryPage } from './balance-inquiry.page';

describe('BalanceInquiryPage', () => {
  let component: BalanceInquiryPage;
  let fixture: ComponentFixture<BalanceInquiryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceInquiryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceInquiryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
