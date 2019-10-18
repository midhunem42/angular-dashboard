import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthenticComponent } from "./core/authentic/authentic.component";
import { UserLoginDeactivateGuard, AuthGuardService } from "./core/_guards";

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
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
