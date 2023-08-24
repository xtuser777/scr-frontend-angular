import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDriversSearchComponent } from './form-drivers-search.component';

describe('FormDriversSearchComponent', () => {
  let component: FormDriversSearchComponent;
  let fixture: ComponentFixture<FormDriversSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDriversSearchComponent]
    });
    fixture = TestBed.createComponent(FormDriversSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
