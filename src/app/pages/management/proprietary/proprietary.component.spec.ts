import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietaryComponent } from './proprietary.component';

describe('ProprietaryComponent', () => {
  let component: ProprietaryComponent;
  let fixture: ComponentFixture<ProprietaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProprietaryComponent]
    });
    fixture = TestBed.createComponent(ProprietaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
