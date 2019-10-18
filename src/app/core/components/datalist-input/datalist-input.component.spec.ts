import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatalistInputComponent } from './datalist-input.component';

describe('DatalistInputComponent', () => {
  let component: DatalistInputComponent;
  let fixture: ComponentFixture<DatalistInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatalistInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatalistInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
