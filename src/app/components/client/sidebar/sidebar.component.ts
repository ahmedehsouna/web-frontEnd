import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  communities:Array<{name : String}> = [
    {name : "Art"},
    {name : "Sport"},
    {name : "Music"},
    {name : "Anime"},
    {name : "Movies"},
    {name : "Food"},
    {name : "Nature"},  
  ]

    changeCommunity(community){
    localStorage.setItem("hobby", community.name)
    this.data.Hobby.next(community.name)
  }
  constructor(private http: HttpService,private data : DataService) { }
  addPost(form : NgForm){
    this.http.post('/posts', form.value).subscribe(data => {
      console.log(data['result'])
    })
    
  }
  ngOnInit() {
  }

}
