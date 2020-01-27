import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-nav',
  templateUrl: './client-nav.component.html',
  styleUrls: ['./client-nav.component.scss']
})
export class ClientNavComponent implements OnInit {
  hobbies:Array<{name : String}> = [
    {name : "Art"},
    {name : "Sport"},
    {name : "Music"},
    {name : "Anime"},
    {name : "Movies"},
    {name : "Food"},
    {name : "Nature"},  
  ]
  logout(){
    localStorage.clear()
    this.router.navigate([''])

  }
  activeHobby: {name : String} = this.hobbies[0]
  
  constructor(private router : Router) { }

  ngOnInit() {
  }

}
