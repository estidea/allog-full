import { PhotosService } from './../services/photos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-examples',
  templateUrl: './about-examples.component.html',
  styleUrls: ['./about-examples.component.css']
})
export class AboutExamplesComponent implements OnInit {

  photos = [];

  constructor(private _PhotosService: PhotosService) { 
  }

  ngOnInit() {
    this._PhotosService.getAll()
      .subscribe(photos => {
          this.photos = photos;
      }, error => {
        console.log('An unexpected error occured');
      });
  }

}
