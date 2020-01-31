import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http : HttpService,private data:DataService) { }

  $posts:Observable<any>;
  ngOnInit() {
    this.data.Community.subscribe(community=>{
      this.$posts = this.http.get('/posts')
      this.$posts.subscribe(data=>{
        console.log(data)
      })

    })
    // this.$posts = this.http.get('/posts')
  }

}
