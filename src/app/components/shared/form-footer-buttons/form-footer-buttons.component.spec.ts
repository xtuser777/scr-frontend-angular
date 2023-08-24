import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFooterButtonsComponent } from './form-footer-buttons.component';

describe('FormFooterButtonsComponent', () => {
  let component: FormFooterButtonsComponent;
  let fixture: ComponentFixture<FormFooterButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFooterButtonsComponent]
    });
    fixture = TestBed.createComponent(FormFooterButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
