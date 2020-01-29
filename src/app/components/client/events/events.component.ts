import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.scss"]
})
export class EventsComponent implements OnInit {
  events = [
    {
      id: 1,
      user: "Yousef",
      title: "learn Javascript",
      description: "description111111111 about the events 11111111",
      file:
        "http://www.eventwala.info/wp-content/uploads/2016/07/Events-1200x630.jpg"
    },
    {
      id: 2,
      user: "Omar",
      title: "learn Angular",
      description: "description22222",
      file:
        "https://www.topicstalk.com/wp-content/uploads/2019/01/Creative-Ways-to-Plan-Your-Event-More-Sustainable.jpg"
    },
    {
      id: 3,
      user: "Raghda",
      title: "Learn React",
      description: "description333333",
      file: "https://technext.github.io/Evento/images/demo/bg-slide-01.jpg"
    },
    {
      id: 4,
      user: "Saif",
      title: "Learn Javascript",
      description: "description333333",
      file:
        "http://www.eventwala.info/wp-content/uploads/2016/07/Events-1200x630.jpg"
    },
    {
      id: 5,
      user: "Walid",
      title: "Learn Angular",
      description: "description333333",
      file:
        "https://www.topicstalk.com/wp-content/uploads/2019/01/Creative-Ways-to-Plan-Your-Event-More-Sustainable.jpg"
    },
    {
      id: 6,
      user: "name user6",
      title: "events6",
      description: "description333333",
      file: "https://technext.github.io/Evento/images/demo/bg-slide-01.jpg"
    }
  ];
  constructor(private http: HttpClient) {}
  clicked = e => {
    for (var i = 0; i < this.events.length; i++) {
      console.log(this.events[i], e);
    }
  };
  ngOnInit() {
    // this.http.get<any>("/events").subscribe(result => {
    //   this.events = result;
    // });
  }
}
