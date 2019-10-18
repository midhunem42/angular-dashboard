import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { DashboardModule } from "./dashboard/dashboard.module";
import { UserModule } from "./user/user.module";
import { CoreModule } from "./core/core.module";
import { PageErrorModule } from "./page-error/page-error.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ErrorInterceptor, JwtInterceptor } from "./core/_helpers";

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    DashboardModule,
    HttpClientModule,
    PageErrorModule,
    UserModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
