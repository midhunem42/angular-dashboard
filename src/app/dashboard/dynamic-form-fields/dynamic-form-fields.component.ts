import { Component, OnInit } from "@angular/core";
import { CreateDynamicFormService } from "../create-dynamic-form/create-dynamic-form.service";
import { DynamicFormModel } from "../dynamic-form/dynamic-form.model";

@Component({
  selector: "dynamic-form-fields",
  templateUrl: "./dynamic-form-fields.component.html",
  styleUrls: ["./dynamic-form-fields.component.scss"]
})
export class DynamicFormFieldsComponent implements OnInit {
  constructor(private createDynamicFormService: CreateDynamicFormService) {}

  formModels: DynamicFormModel[];
  ngOnInit() {
    this.formModels = this.createDynamicFormService.formModel;
  }
}
