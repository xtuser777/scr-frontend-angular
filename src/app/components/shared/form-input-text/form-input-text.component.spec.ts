import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputTextComponent } from './form-input-text.component';

describe('FormInputTextComponent', () => {
  let component: FormInputTextComponent;
  let fixture: ComponentFixture<FormInputTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormInputTextComponent]
    });
    fixture = TestBed.createComponent(FormInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
