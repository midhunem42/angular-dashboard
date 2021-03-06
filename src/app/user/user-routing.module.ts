import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { UserLoginDeactivateGuard } from "../core/_guards";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [UserLoginDeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
