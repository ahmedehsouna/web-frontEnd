import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/services/http/http.service";
import { DataService } from "src/app/services/data/data.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  constructor(
    private http: HttpService,
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  public posts: any = [];
  public followers: any = [];
  public followings: any = [];

  status: String = "posts";
  profile: boolean;
  username: String;
  $user: Observable<Object>;
  followsYou: boolean;
  notFollowing: boolean;

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.profile = !data["username"];
      this.username = this.profile ? localStorage.username : data["username"];
      if (data["username"] === localStorage.username) {
        this.router.navigate(["profile"]);
      }
      this.data.Community.subscribe(data => {
        this.$user = this.http.get(`/users/${this.username}`).pipe(
          map((one: any) => {
            console.log(one);
            this.http.get(`/users/${one._id}/posts`).subscribe(data => {
              this.posts = data["result"];
            });

            return one["result"];
          })
        );
      });
    });
  }

  getFollowers(id) {
    this.status = "followers";
    this.http.get(`/users/${id}/followers`).subscribe((followers: any) => {
      console.log(followers);
      this.followers = followers.result;
    });
  }

  getFollowings(id) {
    this.status = "folowings";
    this.http.get(`/users/${id}/followings`).subscribe((followings: any) => {
      this.followings = followings.result;
    });
  }

  follow(user) {
    this.http.get(`/users/${user._id}/follow`).subscribe((data: any) => {});
  }
  unfollow(id) {
    this.http.get(`/users/${id}/unfollow`).subscribe((data: any) => {
      console.log(data.success);
    });
  }
}
