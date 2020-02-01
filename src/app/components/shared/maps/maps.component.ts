import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  constructor(private data:DataService) { }
  onChooseLocation(event){
    if(this.changeable){
      this.data.makeEventLocation = [event.coords.lat,event.coords.lng]
      this.lng = event.coords.lng
      this.lat = event.coords.lat
    }
  }
  @Input() public lat : Number;
  @Input() public lng : Number;
  @Input() public changeable: Boolean;

  ngOnInit() {
  }

}
