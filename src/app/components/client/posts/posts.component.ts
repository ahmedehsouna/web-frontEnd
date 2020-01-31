import { Component, OnInit, Output, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  constructor(private http: HttpClient) {}
  private _url: string = "../../../assets/data/posts.json";
  @Input() public posts;

  ngOnInit() {}
}
