import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmployeeDataComponent } from './form-employee-data.component';

describe('FormEmployeeDataComponent', () => {
  let component: FormEmployeeDataComponent;
  let fixture: ComponentFixture<FormEmployeeDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEmployeeDataComponent]
    });
    fixture = TestBed.createComponent(FormEmployeeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
