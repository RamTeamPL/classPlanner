import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworksComponent } from './homeworks.component';

describe('HomeworksComponent', () => {
  let component: HomeworksComponent;
  let fixture: ComponentFixture<HomeworksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeworksComponent]
    });
    fixture = TestBed.createComponent(HomeworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
