import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantViewComponent } from './participant-view.component';

describe('ParticipantViewComponent', () => {
  let component: ParticipantViewComponent;
  let fixture: ComponentFixture<ParticipantViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
