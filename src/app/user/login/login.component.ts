import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { first } from "rxjs/operators";
import { UserService } from "src/app/_services";
import { LoginModel } from "src/app/core/_models";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}
  returnUrl: string;

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  onSubmit() {
    let user = new LoginModel();
    this.userService.login("eve.holt@reqres.in", "cityslicka").subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        // this.loading = false;
      }
    );
  }
}
