import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProprietariesTableComponent } from './form-proprietaries-table.component';

describe('FormProprietariesTableComponent', () => {
  let component: FormProprietariesTableComponent;
  let fixture: ComponentFixture<FormProprietariesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormProprietariesTableComponent]
    });
    fixture = TestBed.createComponent(FormProprietariesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
