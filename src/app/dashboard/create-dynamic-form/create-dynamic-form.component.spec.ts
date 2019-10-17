import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CreateDynamicFormComponent } from "./create-dynamic-form.component";
import { FormsModule } from "@angular/forms";

describe("CreateDynamicFormComponent", () => {
  let component: CreateDynamicFormComponent;
  let fixture: ComponentFixture<CreateDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDynamicFormComponent],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
