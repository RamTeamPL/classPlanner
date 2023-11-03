import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClassmateComponent } from './new-classmate.component';

describe('NewClassmateComponent', () => {
  let component: NewClassmateComponent;
  let fixture: ComponentFixture<NewClassmateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewClassmateComponent]
    });
    fixture = TestBed.createComponent(NewClassmateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
