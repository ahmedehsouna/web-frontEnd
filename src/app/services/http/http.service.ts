import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}
  prod:String = "";
  dev:String = "http://127.0.0.1:8080/api";
  token = localStorage.getItem('token')
  headers = {'authorization' : this.token }
  query = () => `?community=${localStorage.getItem('community')}`
  get(route) {
    return this.http.get(this.dev + route + this.query(), {
      headers: this.token ? this.headers : {}
    });
  }
  post(route, json) {
    return this.http.post(this.dev + route + this.query(), json, {
      headers: this.token ? this.headers : {}
    });
  }
  patch(route, json) {
    return this.http.patch(this.dev + route + this.query(), json, {
      headers: this.token ? this.headers : {}
    });
  }
}
