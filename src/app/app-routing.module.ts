import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthenticComponent } from "./core/authentic/authentic.component";

const routes: Routes = [
  { path: "", redirectTo: "user/login", pathMatch: "full" },
  {
    path: "user",
    loadChildren: () => import(`./user/user.module`).then(m => m.UserModule)
  },
  {
    path: "dashboard",
    component: AuthenticComponent,
    loadChildren: () =>
      import(`./dashboard/dashboard.module`).then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
