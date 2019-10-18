import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginModel } from "src/app/core/models/login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    let user = new LoginModel();
    user.setField({
      token: "token0000",
      userId: "user001",
      role: "USER",
      refreshToken: "refresh",
      loginTime: new Date(),
      expiresIn: new Date()
    });
    sessionStorage.setItem("currentUser", JSON.stringify(user));
    this.router.navigate(["/dashboard/form-fields"]);
  }
}
