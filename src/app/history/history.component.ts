import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  photoHistory: any;
  url = "https://www.google.com/maps/embed/v1/place?key=AIzaSyD5NzUbN1adL2_vBQ3xmif7LxDHaTDNMhk&q=";
  map: string[];

  constructor(private imageService: ImageService) { }

  async ngOnInit() {
    this.photoHistory = await this.imageService.getHistory();
    this.photoHistory = JSON.parse(this.photoHistory);
    this.createMaps();
    console.log(this.photoHistory);
  }

  createMaps() {
    this.map = [];
    this.photoHistory.forEach((element, index) => {
      this.map[index] = this.url + <string>element.latitude + "," + <string>element.longitude; 
    });
  }

}
