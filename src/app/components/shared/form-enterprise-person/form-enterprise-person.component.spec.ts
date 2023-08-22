import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEnterprisePersonComponent } from './form-enterprise-person.component';

describe('FormEnterprisePersonComponent', () => {
  let component: FormEnterprisePersonComponent;
  let fixture: ComponentFixture<FormEnterprisePersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEnterprisePersonComponent]
    });
    fixture = TestBed.createComponent(FormEnterprisePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
