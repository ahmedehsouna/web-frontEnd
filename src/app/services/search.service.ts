import { Injectable } from "@angular/core";
import { HttpService } from "./http/http.service";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  constructor(private http: HttpService) {}

  search(keyword) {
    if (keyword) return this.http.get("/users/search", `?keyword=${keyword}`);
  }
}
