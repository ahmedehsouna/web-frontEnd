import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  Community:BehaviorSubject<any> = new BehaviorSubject(localStorage.getItem("community") || "Main")
  constructor() {
    
  }
}
