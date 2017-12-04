import { ImplementjsService } from './../services/implementjs.service';
import { AuthService } from './../services/auth.service';
import { PhotosService } from './../services/photos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChildren, AfterViewInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @ViewChildren('mylocalvar') mylist;
  title = '';
  url = '/api/photos/new/';
  uploader:FileUploader;
  photos = [];
  currentPhoto = {thumbs:['']};
  prevIndex = 0;
  nextIndex = 0;
  isDivVisible = false;

  constructor(
    public auth: AuthService,
    private _implementService: ImplementjsService,
    private _route:ActivatedRoute, 
    private _PhotosService: PhotosService) { 
  }

  ngOnInit() {
    this._implementService.runMaterializeModal();
    this._route.paramMap
      .subscribe(params => {
        this.title = params.get('album');
        this.url = this.url + this.title;
      this.uploader = new FileUploader({url: this.url, itemAlias: 'photo'});
      });

    this._PhotosService.getAll(this.title)
    .subscribe(photos => {
        this.photos = photos;
    }, error => {
      alert('An unexpected error occured');
    });
  }
  
  ngAfterViewInit() {
    this._implementService.runBrickLayerLoad();
    this.mylist.changes.subscribe(() => {
      this._implementService.runBrickLayerLoad();
    }
    );
  }

  uploadAllPhotos(e, items) {
    e.preventDefault();
    let that = this;
    let destination = './dist/uploads/' + this.title + '/';
    items.forEach((item,index) => {
      item.upload();
      item.onSuccess = function(response, status, headers) {
        let resp = this.uploader.queue[index]._xhr.response;
        let jsonResponse = JSON.parse(resp);
        let filename = jsonResponse.data[0].filename;
        let id = jsonResponse.data[0]._id;
        console.log(jsonResponse.data[0]);
        let newPhoto = { "_id": id,"destination": destination, "filename": filename };
        that.photos.splice(0,0,newPhoto); 
      }
    });
  }

  hasBaseDropZoneOver:boolean = false;
  
  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
  
  removePhoto(photo) {
    let destination = './dist/uploads/' + this.title + '/' + photo.filename;
    this._PhotosService.delete(photo._id, destination)
    .subscribe(
      res => {
      let index = this.photos.indexOf(photo);
      this.photos.splice(index, 1);
      }, 
      (error) => {
        alert('An unexpected error occured');
    });
  }

  /* Show modal photo */
  setCurrentPhoto(photo) {
    this.isDivVisible = true;
    this.currentPhoto = photo;
    let index = this.photos.indexOf(photo);
    let quantity = this.photos.length;
    if(index==0) this.prevIndex = quantity-1 
      else this.prevIndex = index-1;
    if (index==quantity-1) this.nextIndex = 0
      else this.nextIndex = index+1;
  }

  prevImage() {
    let quantity = this.photos.length;
    if(this.prevIndex<0) {
      this.prevIndex = quantity-2;
      this.nextIndex--; 
    } else if (this.nextIndex=0){
      this.prevIndex--;
      this.nextIndex = quantity-1;
    } else {
      this.prevIndex--;
      this.nextIndex--;
    }
    this.currentPhoto = this.photos[this.prevIndex+1];
  }

  nextImage() {
    let quantity = this.photos.length;
    if(this.nextIndex==quantity-1) {
      this.prevIndex++;
      this.nextIndex = 0; 
      this.currentPhoto = this.photos[this.prevIndex+1];
    } else if (this.prevIndex==quantity-1){
      this.prevIndex = 0;
      this.nextIndex++;
      this.currentPhoto = this.photos[this.prevIndex+1];
    } else {
      this.prevIndex++;
      this.nextIndex++;
      let index = this.nextIndex-1;
      this.currentPhoto = this.photos[index];
    }
  }

  closeModal(modalPhoto) {
    this.isDivVisible = false;
    this._implementService.runCloseModalBgLayer();
  }
}
