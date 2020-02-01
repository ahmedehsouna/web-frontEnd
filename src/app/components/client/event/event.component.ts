import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Params } from "@angular/router";
import { EventsComponent } from "../events/events.component";
import { HttpService } from "src/app/services/http/http.service";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.scss"]
})
export class EventComponent implements OnInit {
  event: any;
  posts: any;
  constructor(private route: ActivatedRoute, private http: HttpService) {}

  ngOnInit() {
    this.http.get(`/events/5e31e5ba9e84f74814834c4e`).subscribe(data => {
      this.event = data["result"];
    });
    this.http.get(`/events/5e31e5ba9e84f74814834c4e/posts`).subscribe(data => {
      this.posts = data["result"];
    });
    this.route.params.subscribe((params: Params) => {
      this.event.id = params["id"];
    });
  }
}
