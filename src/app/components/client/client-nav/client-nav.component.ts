import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "src/app/services/data/data.service";
import { Observable } from "rxjs";
import { FormControl } from "@angular/forms";
import { HttpService } from "src/app/services/http/http.service";
import { of } from "rxjs";
import { SearchService } from "src/app/services/search.service";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

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
  results: any[] = [];
  queryField: FormControl = new FormControl();
  $Community: Observable<any>;

  constructor(
    private router: Router,
    private data: DataService,
    private http: HttpService,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.$Community = this.data.Community;
    this.queryField.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(query => {
          if (query) return this.searchService.search(query);
          return of([]);
        })
      )
      .subscribe(queryField => {
        if (queryField) {
          console.log(queryField);
          this.results = queryField["results"];
        } else {
          return;
        }
      });
  }
}
