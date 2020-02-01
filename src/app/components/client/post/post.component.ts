import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  @Input() singlePost: {
    post_id: Number;
    content: string;
    _user: object;
    _hobby: string;
    _event: string;
    likesCount: number;
    commentsCount: number;
    isLiked: boolean;
    deactivated: boolean;
    file: string;
    createdAt: string;
  };
  public id;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}
  private _url: string = "../../../assets/data/onePost.json";
  public post;

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      console.log(param["post_id"]);
      this.singlePost.post_id = param["post_id"];
    });

    // would be replaced by get post by id when the backend is ready
    this.http.get(this._url).subscribe(data => {
      this.post = data;
      console.log("daaaaaaaaaa", this.post._user.username);
    });
  }
}
