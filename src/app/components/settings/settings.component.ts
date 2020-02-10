import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/services/http/http.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  constructor(private http: HttpService) {}
  newData: any;
  user: any;
  fileData: any;

  ngOnInit() {
    this.http.get(`/users/${localStorage.username}`).subscribe((one: any) => {
      this.user = one.result;
      console.log(this.user);
    });
  }

  updated(form) {
    console.log(form);
    var formData = new FormData(form);

    this.http.patch(`/users/settings`, formData).subscribe(data => {
      console.log(data, "hiii");
    });
  }
  upload(e: any, div) {
    var input = e.target;

    if (input.files && input.files[0]) {
      div.style["background-image"] =
        "url(" + URL.createObjectURL(input.files[0]) + ")";
    }
  }
}
