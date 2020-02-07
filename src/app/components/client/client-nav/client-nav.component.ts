import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from "src/app/services/data/data.service";
import { Observable } from "rxjs";
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: "app-client-nav",
  templateUrl: "./client-nav.component.html",
  styleUrls: ["./client-nav.component.scss"]
})
export class ClientNavComponent implements OnInit {
  logout() {
    localStorage.clear();
    this.router.navigate([""]);
  }

  $Community: Observable<any>;
  extraDiv:Boolean = true;
  constructor(private router: Router, private data: DataService, private http:HttpService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.data.extraDiv.subscribe(bool => {
      this.extraDiv = bool
    })
    this.data.Community.subscribe(data =>{
      this.http.get('/communities/check').subscribe((data:any) => {
        if(data.success){
          this.$Community = this.data.Community
        }else{
          this.data.noCommunity.next()
        }
      })

    })
  }
}
