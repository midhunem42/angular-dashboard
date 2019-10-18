import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { LoginModel } from "../core/_models";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http
      .post<any>(`/api/login`, {
        email: username,
        password: password
      })
      .pipe(
        map(user => {
          let loginModel = new LoginModel();
          loginModel.setField({
            token: user.token,
            userId: "user001",
            role: "USER",
            refreshToken: "refresh",
            loginTime: new Date(),
            expiresIn: new Date()
          });
          sessionStorage.setItem("currentUser", JSON.stringify(loginModel));
          // login successful if there's a jwt token in the response
          // if (user && user.token) {
          //   // store user details and jwt token in local storage to keep user logged in between page refreshes
          //   localStorage.setItem("currentUser", JSON.stringify(user));
          // }

          return user;
        })
      );
  }
}
