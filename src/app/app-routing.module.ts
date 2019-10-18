import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthenticComponent } from "./core/authentic/authentic.component";
import { AuthGuardService } from "./core/services/guards/auth-guard.service";
import { UserLoginDeactivateGuard } from "./core/services/guards/user-login-deactivate.guard";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "",
    loadChildren: () => import(`./user/user.module`).then(m => m.UserModule),
    canActivate: [UserLoginDeactivateGuard]
  },
  {
    path: "",
    component: AuthenticComponent,
    loadChildren: () =>
      import(`./dashboard/dashboard.module`).then(m => m.DashboardModule),
    canActivate: [AuthGuardService]
  },
  {
    path: "",
    loadChildren: () =>
      import(`./page-error/page-error.module`).then(m => m.PageErrorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
