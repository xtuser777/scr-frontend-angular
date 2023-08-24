import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDriversTableComponent } from './form-drivers-table.component';

describe('FormDriversTableComponent', () => {
  let component: FormDriversTableComponent;
  let fixture: ComponentFixture<FormDriversTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDriversTableComponent]
    });
    fixture = TestBed.createComponent(FormDriversTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
