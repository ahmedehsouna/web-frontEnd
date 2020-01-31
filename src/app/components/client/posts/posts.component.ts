import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  constructor(private http: HttpClient) {}
  private _url: string = "../../../assets/data/posts.json";
  public listPosts;

  ngOnInit() {
    this.http.get(this._url).subscribe(data => {
      this.listPosts = data;
      console.log(data);
    });
  }
}
