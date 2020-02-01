import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/services/http/http.service";
import { NgForm } from "@angular/forms";
@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  constructor(private http: HttpService) {}
  newData: any;

  ngOnInit() {}

  updated(form: NgForm) {
    this.http.patch(`/users/settings`, form.value).subscribe(data => {
      console.log(data);
      if (data["success"]) this.newData = form.value;
      console.log(this.newData);
    });
  }
}
