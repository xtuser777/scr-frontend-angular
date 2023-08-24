import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDriverDataComponent } from './form-driver-data.component';

describe('FormDriverDataComponent', () => {
  let component: FormDriverDataComponent;
  let fixture: ComponentFixture<FormDriverDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDriverDataComponent]
    });
    fixture = TestBed.createComponent(FormDriverDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
