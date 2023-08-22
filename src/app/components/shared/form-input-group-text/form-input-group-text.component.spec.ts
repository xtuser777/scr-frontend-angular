import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputGroupTextComponent } from './form-input-group-text.component';

describe('FormInputGroupTextComponent', () => {
  let component: FormInputGroupTextComponent;
  let fixture: ComponentFixture<FormInputGroupTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormInputGroupTextComponent]
    });
    fixture = TestBed.createComponent(FormInputGroupTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
