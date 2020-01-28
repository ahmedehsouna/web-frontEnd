import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Params } from "@angular/router";
import { EventsComponent } from "../events/events.component";

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

  event: {
    id: number;
  };
  constructor(private route: ActivatedRoute, private events: EventsComponent) {}

  ngOnInit() {
    console.log(this.events);
    this.event = {
      id: this.route.snapshot.params["id"]
    };
    this.route.params.subscribe((params: Params) => {
      this.event.id = params["id"];
    });
  }
}
