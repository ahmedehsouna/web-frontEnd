import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  makeEventLocation:Array<Number> = [];
  Community:BehaviorSubject<any> = new BehaviorSubject(localStorage.getItem("community") || "Main")
  constructor() {
    
  }
}
