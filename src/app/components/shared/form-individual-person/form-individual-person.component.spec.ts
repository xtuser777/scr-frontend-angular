import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIndividualPersonComponent } from './form-individual-person.component';

describe('FormIndividualPersonComponent', () => {
  let component: FormIndividualPersonComponent;
  let fixture: ComponentFixture<FormIndividualPersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormIndividualPersonComponent]
    });
    fixture = TestBed.createComponent(FormIndividualPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
