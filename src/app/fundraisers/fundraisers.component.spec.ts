import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundraisersComponent } from './fundraisers.component';

describe('FundraisersComponent', () => {
  let component: FundraisersComponent;
  let fixture: ComponentFixture<FundraisersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundraisersComponent]
    });
    fixture = TestBed.createComponent(FundraisersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
