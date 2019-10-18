import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreComponent } from "./core.component";
import { AuthenticComponent } from "./authentic/authentic.component";
import { FrameWorkBodyComponent } from "./frame-work-body/frame-work-body.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";

const components = [
  AuthenticComponent,
  CoreComponent,
  FrameWorkBodyComponent,
  SidebarComponent,
  NavbarComponent
];
const custom_modules = [];
@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule, ...custom_modules],
  exports: [...components, ...custom_modules]
})
export class CoreModule {}
