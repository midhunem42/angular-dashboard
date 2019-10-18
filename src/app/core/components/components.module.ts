import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsComponent } from "./components.component";
import { DatalistInputComponent } from "./datalist-input/datalist-input.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

const components = [ComponentsComponent, DatalistInputComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [...components]
})
export class ComponentsModule {}
