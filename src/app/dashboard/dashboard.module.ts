import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";
import { CreateDynamicFormComponent } from "./create-dynamic-form/create-dynamic-form.component";
import { DynamicFormFieldsComponent } from "./dynamic-form-fields/dynamic-form-fields.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "../core/core.module";
import { ComponentsModule } from "../core/components/components.module";

const components = [
  CreateDynamicFormComponent,
  DashboardComponent,
  DynamicFormComponent,
  DynamicFormFieldsComponent
];
const custom_modules = [
  ComponentsModule,
  CoreModule,
  FormsModule,
  ReactiveFormsModule
];
@NgModule({
  declarations: [...components],
  imports: [CommonModule, DashboardRoutingModule, ...custom_modules],
  exports: [...components]
})
export class DashboardModule {}
