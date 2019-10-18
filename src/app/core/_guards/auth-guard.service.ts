import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivateChild,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { LoginModel } from "../_models";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const currentUser: LoginModel = sessionStorage.getItem("currentUser")
      ? JSON.parse(sessionStorage.getItem("currentUser"))
      : new LoginModel();
    return !!currentUser.token
      ? true
      : this.router.navigate(["/login"], {
          queryParams: { returnUrl: state.url }
        });
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const currentUser: LoginModel = sessionStorage.getItem("currentUser")
      ? JSON.parse(sessionStorage.getItem("currentUser"))
      : new LoginModel();
    return !!currentUser.token
      ? true
      : this.router.navigate(["/login"], {
          queryParams: { returnUrl: state.url }
        });
  }
}
