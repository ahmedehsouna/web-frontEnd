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
  // event = {
  //   id: "1",
  //   user: "name user1",
  //   title: "events1",
  //   descreption: "description111111111 about the events 11111111",
  //   file:
  //     "http://www.eventwala.info/wp-content/uploads/2016/07/Events-1200x630.jpg"
  // };

  event: any;
  constructor(private route: ActivatedRoute, private http: HttpService) {}

  ngOnInit() {
    this.http.get(`/events/5e31e5ba9e84f74814834c4e`).subscribe(data => {
      this.event = data["result"];
    });

    // this.event = {
    //   id: this.route.snapshot.params["id"]
    // };
    this.route.params.subscribe((params: Params) => {
      this.event.id = params["id"];
      this.event.title = params["title"];
    });
  }
}
