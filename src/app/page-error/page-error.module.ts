import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PageErrorRoutingModule } from "./page-error-routing.module";
import { PageErrorComponent } from "./page-error.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { UnauthorizedComponent } from "./unauthorized/unauthorized.component";

const components = [
  PageErrorComponent,
  PageNotFoundComponent,
  UnauthorizedComponent
];
@NgModule({
  declarations: [...components],
  imports: [CommonModule, PageErrorRoutingModule],
  exports: [...components]
})
export class PageErrorModule {}
