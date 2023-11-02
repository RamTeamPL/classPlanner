import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFundraisersComponent } from './add-fundraisers.component';

describe('FundraisersComponent', () => {
  let component: AddFundraisersComponent;
  let fixture: ComponentFixture<AddFundraisersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFundraisersComponent]
    });
    fixture = TestBed.createComponent(AddFundraisersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});