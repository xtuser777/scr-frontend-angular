import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterizationComponent } from './parameterization.component';

describe('ParameterizationComponent', () => {
  let component: ParameterizationComponent;
  let fixture: ComponentFixture<ParameterizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParameterizationComponent]
    });
    fixture = TestBed.createComponent(ParameterizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
