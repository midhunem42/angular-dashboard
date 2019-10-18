import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { DynamicFormFieldsComponent } from "./dynamic-form-fields/dynamic-form-fields.component";
import { CreateDynamicFormComponent } from "./create-dynamic-form/create-dynamic-form.component";
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "form-fields",
        component: DynamicFormFieldsComponent
      },
      {
        path: "create-field",
        component: CreateDynamicFormComponent
      },
      {
        path: "form",
        component: DynamicFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
