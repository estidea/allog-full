import { ImplementjsService } from './../services/implementjs.service';
import { PhotosService } from './../services/photos.service';
import { Component, OnInit, ViewChildren, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about-examples',
  templateUrl: './about-examples.component.html',
  styleUrls: ['./about-examples.component.css']
})
export class AboutExamplesComponent implements OnInit {
  @ViewChildren('mylocalvar') mylist;
  photos = [];

  constructor(
    private _PhotosService: PhotosService,
    private _implementService: ImplementjsService) { 
  }

  contains(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          return true;
        }
    }
    return false;
  }

  ngOnInit() {
    this._PhotosService.getAll()
      .subscribe(photos => {
          let i = 0; 
          let k = 0; 
          let usedRandom = []; 
          while (i < 8) { 
            let random = Math.floor(Math.random()*photos.length); 
            if (this.contains(usedRandom, random)===false) {
              if ('thumbs' in photos[random]) {
                this.photos[i] = photos[random];
                usedRandom.push(random);
                i++;
              }
              k++;
              if (k>photos.length) i = 9;
            }
          }
      }, error => {
        console.log('An unexpected error occured');
      });
  }

  ngAfterViewInit() {
    this._implementService.runBrickLayerLoad();
    this.mylist.changes.subscribe(() => {
      this._implementService.runBrickLayerLoad();
    }
    );
  }


}
