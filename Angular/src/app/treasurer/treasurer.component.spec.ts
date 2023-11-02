import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasurerComponent } from './treasurer.component';

describe('TreasurerComponent', () => {
  let component: TreasurerComponent;
  let fixture: ComponentFixture<TreasurerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreasurerComponent]
    });
    fixture = TestBed.createComponent(TreasurerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
