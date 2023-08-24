import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietariesComponent } from './proprietaries.component';

describe('ProprietariesComponent', () => {
  let component: ProprietariesComponent;
  let fixture: ComponentFixture<ProprietariesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProprietariesComponent]
    });
    fixture = TestBed.createComponent(ProprietariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
