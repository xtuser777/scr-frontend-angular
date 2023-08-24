import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDriverBankDataComponent } from './form-driver-bank-data.component';

describe('FormDriverBankDataComponent', () => {
  let component: FormDriverBankDataComponent;
  let fixture: ComponentFixture<FormDriverBankDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDriverBankDataComponent]
    });
    fixture = TestBed.createComponent(FormDriverBankDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
