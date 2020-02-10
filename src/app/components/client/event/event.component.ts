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
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.http.get(`/events/${params.id}`).subscribe(data => {
        console.log(data["result"])
        this.event = data["result"];
      });
      this.http
        .get(`/events/${params.id}/posts`)
        .subscribe(data => {
          this.posts = data["result"];
        });
    });
  }
}
