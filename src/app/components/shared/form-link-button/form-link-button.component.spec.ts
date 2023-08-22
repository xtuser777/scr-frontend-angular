import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLinkButtonComponent } from './form-link-button.component';

describe('FormLinkButtonComponent', () => {
  let component: FormLinkButtonComponent;
  let fixture: ComponentFixture<FormLinkButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormLinkButtonComponent]
    });
    fixture = TestBed.createComponent(FormLinkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
