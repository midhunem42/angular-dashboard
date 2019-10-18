import { Component, OnInit } from "@angular/core";
import { DynamicFormModel } from "../dynamic-form/dynamic-form.model";
import { CreateDynamicFormService } from "./create-dynamic-form.service";
import { Router } from "@angular/router";

@Component({
  selector: "create-dynamic-form",
  templateUrl: "./create-dynamic-form.component.html",
  styleUrls: ["./create-dynamic-form.component.scss"]
})
export class CreateDynamicFormComponent implements OnInit {
  error = false;
  formModel: DynamicFormModel = {
    label: null,
    type: "input",
    placeholder: null,
    inputType: "text",
    options: [
      {
        value: null
      }
    ],
    required: false
  };
  constructor(
    private createDynamicFormService: CreateDynamicFormService,
    private router: Router
  ) {}

  ngOnInit() {}
  addOptions() {
    this.formModel.options.push({
      value: null
    });
  }

  deleteOption(index) {
    delete this.formModel.options[index];
    this.formModel.options = this.formModel.options.filter(
      x => x !== undefined
    );
  }
  saveField() {
    this.error = false;
    if (this.formModel.label === null || this.formModel.label === "") {
      console.log("====================================");
      console.log("Field Name can't be empty");
      console.log("====================================");
      this.error = true;
    }
    if (this.formModel.type === "select") {
      if (
        this.formModel.options.filter(x => x.value === null || x.value === "")
          .length > 0
      ) {
        console.log("====================================");
        console.log("Options Can't be empty");
        console.log("====================================");
        this.error = true;
      }
    } else {
      if (
        this.formModel.placeholder === null ||
        this.formModel.placeholder === ""
      ) {
        this.error = true;
        console.log("====================================");
        console.log("placeholder can't be empty");
        console.log("====================================");
      }
    }
    if (!this.error) {

      this.createDynamicFormService.formModel.push(this.formModel);
      this.router.navigate(["/dashboard/form-fields"]);
    }
  }

  
}
