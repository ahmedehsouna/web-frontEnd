import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  constructor(private data:DataService) { }
  onChooseLocation(event){
    this.data.makeEventLocation = [event.coords.lat,event.coords.lng]
    this.lng = event.coords.lng
    this.lat = event.coords.lat
  }
  lat:Number = 36.1194;
  lng:Number = 10.0868;
  location : Object;
  ngOnInit() {
  }

}
