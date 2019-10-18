import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { DashboardModule } from "./dashboard/dashboard.module";
import { UserModule } from "./user/user.module";
import { CoreModule } from "./core/core.module";
import { PageErrorModule } from "./page-error/page-error.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    CoreModule,
    UserModule,
    PageErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
