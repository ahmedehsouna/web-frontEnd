import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http : HttpService) { }
  car:String = "car"
  another:String = "another";
  getCar(){
    console.log("hello")
    return this.car

  }
  ngOnInit() {
    this.http.get(`/users/${localStorage.getItem("id")}/posts`).subscribe(data => {
      console.log(data)
    })
  }

}
