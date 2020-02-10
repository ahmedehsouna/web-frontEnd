import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  constructor(private http : HttpService,private data:DataService) { }

  $posts:Observable<any>;
  $events :Observable<any>
  status:String = "posts";
  ngOnInit() {
    this.data.Community.subscribe(community=>{
      this.$events = this.http.get('/events').pipe(map((one:any) => {
        return one.result
      }))
      this.$events.subscribe(one => console.log(one))
      this.$posts = this.http.get('/posts').pipe(map((one:any) => {
        one.posts.map(post =>{ 
          if(post.file){
            if(/video\/upload/.test(post.file)){
              post.isVideo = true
            }
          }
          return post
        })
        return one.posts
      }))
    })
    // this.$posts = this.http.get('/posts')
  }
}
