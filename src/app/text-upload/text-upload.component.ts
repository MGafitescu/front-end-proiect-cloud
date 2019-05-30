import { Component, OnInit } from '@angular/core';
import { Language, TTSlanguages } from '../languages';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-text-upload',
  templateUrl: './text-upload.component.html',
  styleUrls: ['./text-upload.component.scss']
})
export class TextUploadComponent implements OnInit {

  imagePath: string;
  imageUrl: any;
  message: string;
  image: string;
  loading = false;
  result: any;
  url = "https://www.google.com/maps/embed/v1/place?key=AIzaSyD5NzUbN1adL2_vBQ3xmif7LxDHaTDNMhk&q=";
  map = '';
  languages: Language[] = TTSlanguages;
  selectedLang: string;
  loadingAudio = false;
  audioFile: string;
  toggle: boolean;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.toggle = true;
  }

  preview(file) {
    if (file.files.length === 0) {
      return;
    }

    let mimeType = file.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported";
      return;
    }

    let fileReader = new FileReader();
    this.imagePath = <string>file.files[0].name;
    console.log(this.imagePath);
    fileReader.readAsDataURL(file.files[0]);
    fileReader.onload = () => {
      this.imageUrl = fileReader.result;
    }
    fileReader.onloadend = () => {
      this.image = <string>fileReader.result;
      let reg = new RegExp("^data:image\/[a-zA-Z]+;base64,");
      this.image = this.image.replace(reg, "");
      //console.log(this.image);
    }
  }

  async upload() {
    this.loading = true;
    let lang;
    if (this.selectedLang == undefined)
      lang = "en-GB";
    else lang = this.selectedLang;
    this.result = await this.imageService.postTextImage({ filename: this.imagePath, file: this.image, language: lang });
    this.result = JSON.parse(this.result);
    this.map = this.url + <string>this.result.latitude + "," + <string>this.result.longitude;
    this.audioFile = this.result.audio;
    console.log(this.result);
    this.loading = false;
    this.toggle = !this.toggle;
  }

}
