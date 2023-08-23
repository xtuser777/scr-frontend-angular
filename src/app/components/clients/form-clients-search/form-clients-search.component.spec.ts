import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClientsSearchComponent } from './form-clients-search.component';

describe('FormClientsSearchComponent', () => {
  let component: FormClientsSearchComponent;
  let fixture: ComponentFixture<FormClientsSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormClientsSearchComponent]
    });
    fixture = TestBed.createComponent(FormClientsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
