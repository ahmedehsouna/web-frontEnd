import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http : HttpService) { }
  car:String = "car"
  another:String = "another";
  $posts:Observable<any>;
  getCar(){
    console.log("hello")
    return this.car

  }
  ngOnInit() {
    this.$posts = this.http.get('/posts')
  }

}
