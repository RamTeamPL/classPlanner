import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachAnnouncementComponent } from './each-announcement.component';

describe('EachAnnouncementComponent', () => {
  let component: EachAnnouncementComponent;
  let fixture: ComponentFixture<EachAnnouncementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EachAnnouncementComponent]
    });
    fixture = TestBed.createComponent(EachAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
