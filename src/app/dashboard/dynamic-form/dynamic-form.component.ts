import { Component, OnInit } from "@angular/core";
import { DynamicFormModel } from "./dynamic-form.model";
import { CreateDynamicFormService } from "../create-dynamic-form/create-dynamic-form.service";
import * as _ from "lodash";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.scss"]
})
export class DynamicFormComponent implements OnInit {
  formModel: DynamicFormModel[] = [];
  fields = [];
  form: FormGroup;

  datalist;

  constructor(
    private createDynamicFormService: CreateDynamicFormService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.formModel = this.createDynamicFormService.formModel;

    this.fields = this.formModel.map(el => {
      console.log("====================================");
      console.log(_.camelCase(el.label));
      console.log("====================================");
      if (el.type === "select") {
        return { label: el.options[0].value };
      }
      return { label: null };
    });

    let group = {};
    this.formModel.forEach(el => {
      if (el.type === "select") {
        group = { ...group, [_.camelCase(el.label)]: [el.options[0].value] };
      } else if (el.required) {
        group = {
          ...group,
          [_.camelCase(el.label)]: [null, Validators.required]
        };
      } else {
        group = { ...group, [_.camelCase(el.label)]: [null] };
      }
    });
    this.form = this.formBuilder.group(group);
  }
  OnSubmit() {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(key => {
        this.form.controls[key].markAsUntouched();
        this.form.controls[key].markAsPristine();
      });
    } else {
      console.log("====================================");
      console.log(this.form.value);
      console.log("====================================");
    }
  }
  getControlName(name: any): any {
    return _.camelCase(name);
  }
}
