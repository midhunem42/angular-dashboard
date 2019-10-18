import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginModel } from "../_models";
import { environment } from "src/environments/environment";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let currentUser: LoginModel = JSON.parse(
      sessionStorage.getItem("currentUser")
    );
    const apiUrl = environment.API.BASE_URL + request.urlWithParams;

    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }
    request = request.clone({ url: apiUrl });
    return next.handle(request);
  }
}
