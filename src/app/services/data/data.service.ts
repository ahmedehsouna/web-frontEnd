import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  Hobby:BehaviorSubject<any> = new BehaviorSubject(localStorage.getItem("hobby") || "Main")
  constructor() {
    
  }
}
