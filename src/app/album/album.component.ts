import { AuthService } from './../services/auth.service';
import { PhotosService } from './../services/photos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

// const newURL = '/api/photos/new';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  title = '';
  url = '/api/photos/new/';
  uploader:FileUploader;
  photos = [];

  constructor(
    public auth: AuthService,
    private _route:ActivatedRoute, 
    private _PhotosService: PhotosService) { 
  }

  
  ngOnInit() {
    //this._Implementservice.runBricklayer();
    this._route.paramMap
      .subscribe(params => {
        //key = album.title
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
}
