import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputSelectComponent } from './form-input-select.component';

describe('FormInputSelectComponent', () => {
  let component: FormInputSelectComponent;
  let fixture: ComponentFixture<FormInputSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormInputSelectComponent]
    });
    fixture = TestBed.createComponent(FormInputSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
