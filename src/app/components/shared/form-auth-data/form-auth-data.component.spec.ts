import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAuthDataComponent } from './form-auth-data.component';

describe('FormAuthDataComponent', () => {
  let component: FormAuthDataComponent;
  let fixture: ComponentFixture<FormAuthDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAuthDataComponent]
    });
    fixture = TestBed.createComponent(FormAuthDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
