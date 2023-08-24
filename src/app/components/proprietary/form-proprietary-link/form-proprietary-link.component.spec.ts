import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProprietaryLinkComponent } from './form-proprietary-link.component';

describe('FormProprietaryLinkComponent', () => {
  let component: FormProprietaryLinkComponent;
  let fixture: ComponentFixture<FormProprietaryLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormProprietaryLinkComponent]
    });
    fixture = TestBed.createComponent(FormProprietaryLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
