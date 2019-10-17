import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameWorkBodyComponent } from './frame-work-body.component';

describe('FrameWorkBodyComponent', () => {
  let component: FrameWorkBodyComponent;
  let fixture: ComponentFixture<FrameWorkBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameWorkBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameWorkBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
