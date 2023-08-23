import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClientTypeComponent } from './form-client-type.component';

describe('FormClientTypeComponent', () => {
  let component: FormClientTypeComponent;
  let fixture: ComponentFixture<FormClientTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormClientTypeComponent]
    });
    fixture = TestBed.createComponent(FormClientTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
