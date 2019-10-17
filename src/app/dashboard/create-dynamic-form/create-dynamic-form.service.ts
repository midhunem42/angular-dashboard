import { Injectable } from "@angular/core";
import { DynamicFormModel } from "../dynamic-form/dynamic-form.model";

@Injectable({
  providedIn: "root"
})
export class CreateDynamicFormService {
  constructor() {}
  formModel: DynamicFormModel[] = [];
}
