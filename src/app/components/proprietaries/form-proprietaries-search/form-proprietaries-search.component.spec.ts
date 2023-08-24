import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProprietariesSearchComponent } from './form-proprietaries-search.component';

describe('FormProprietariesSearchComponent', () => {
  let component: FormProprietariesSearchComponent;
  let fixture: ComponentFixture<FormProprietariesSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormProprietariesSearchComponent]
    });
    fixture = TestBed.createComponent(FormProprietariesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
