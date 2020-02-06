import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  noCommunity:Subject<any>= new Subject()
  makeEventLocation:Array<Number> = [];
  Community:BehaviorSubject<any> = new BehaviorSubject(localStorage.getItem("community"))
  constructor() {
    
  }
}
