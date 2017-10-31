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

  constructor(private _route:ActivatedRoute, private _PhotosService: PhotosService) { 
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
  
  uploadPhotos(e) {
    e.preventDefault(); // TODO remove this
    //     this._UploadService.create(album)
    //       .subscribe(
    //         res => {
    //           console.log('the album was created')
    //           this.albums.splice(0,0,album);
    //         }, 
    //         (error) => {
    //           alert('An unexpected error occured');
    //         });
    //       newtitle.value='';
    //       newdescription.value='';
    //       albumPreviewPhoto.src = 'http://demo.warptheme.com/images/placeholder_600x400.svg';
    // } // TODO if error
  }

  hasBaseDropZoneOver:boolean = false;
  
  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
  
  removePhoto(photo) {
    this._PhotosService.delete(photo._id)
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
