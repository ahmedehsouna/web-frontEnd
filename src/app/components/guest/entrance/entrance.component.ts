import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpService } from "src/app/services/http/http.service";
import { Router } from "@angular/router";
import { ValidateService } from "src/app/services/validate/validate.service";

@Component({
  selector: "app-entrance",
  templateUrl: "./entrance.component.html",
  styleUrls: ["./entrance.component.scss"]
})
export class EntranceComponent implements OnInit {
  constructor(
    private http: HttpService,
    private router: Router,
    private validateService: ValidateService
  ) {}
  submitSignInForm(form: NgForm) {
    this.http.post("/users/authenticate", form.value).subscribe(data => {
      if (data["success"]) {
        localStorage.setItem("token", data["token"]);
        location.reload();
      }
    });
  }
  submitSignUpForm(form: NgForm) {
    this.http.post("/users/register", form.value).subscribe((data: any) => {
      if (data.success) this.submitSignInForm(form);
      console.log(form.value);
    });
    // Required fields
    // if (!this.validateService.validateRegister(form.value.user)) {
    //   console.log("please fill in all fields");
    //   return false;
    // }
    // Validate email)
    // if (!this.validateService.validateEmail(form.value.email)) {
    //   console.log("Please fill a valid email");
    //   return false;
    // }
  }

  ngOnInit() {}
}
