import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client-nav',
  templateUrl: './client-nav.component.html',
  styleUrls: ['./client-nav.component.scss']
})
export class ClientNavComponent implements OnInit {
  
  logout(){
    localStorage.clear()
    this.router.navigate([''])

  }

  $Hobby:Observable<any>;
  
  constructor(private router : Router,private data: DataService) { }

  ngOnInit() {
    this.$Hobby = this.data.Hobby
  }

}
