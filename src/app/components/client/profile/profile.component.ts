import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/services/http/http.service";
import { DataService } from "src/app/services/data/data.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  constructor(private http: HttpService, private data: DataService) {}

  ngOnInit() {
    this.data.Community.subscribe(data => {
      this.http
        .get(`/users/${localStorage.getItem("id")}/posts`)
        .subscribe(post => {
          console.log(post);
        });
    });
  }
}
