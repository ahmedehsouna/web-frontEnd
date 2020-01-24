import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get(route, query) {
    return this.http.get(route + query, { headers: {} });
  }
  post(route, json) {
    return this.http.post(route, json, { headers: {} });
  }
  patch(route, json) {
    return this.http.patch(route, json, { headers: {} });
  }
}
