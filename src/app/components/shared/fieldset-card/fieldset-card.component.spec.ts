import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsetCardComponent } from './fieldset-card.component';

describe('FieldsetCardComponent', () => {
  let component: FieldsetCardComponent;
  let fixture: ComponentFixture<FieldsetCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldsetCardComponent]
    });
    fixture = TestBed.createComponent(FieldsetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
