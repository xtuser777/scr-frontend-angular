import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClientsTableComponent } from './form-clients-table.component';

describe('FormClientsTableComponent', () => {
  let component: FormClientsTableComponent;
  let fixture: ComponentFixture<FormClientsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormClientsTableComponent]
    });
    fixture = TestBed.createComponent(FormClientsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
