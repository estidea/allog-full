import { UploadService } from './../services/upload.service';
import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
// import { ImageService } from '../services/image.service';
import { Observable } from 'rxjs/Observable';
// import { GalleryImage } from '../models/galleryImage.model';

const newURL = '/api/photos/new';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  // images: Observable<GalleryImage[]>;
  albums = [];
  activeNewForm = false;
  title = '';
  description = '';
  thumb = '';

  constructor(private _UploadService: UploadService) { } 

  ngOnInit() {
    this._UploadService.getAll()
      .subscribe(albums => {
         this.albums = albums;
      }, error => {
        alert('An unexpected error occured');
      });
  }

  changeTitle(title:HTMLInputElement, albumPreviewTitle:HTMLElement) {
    this.title = title.value;
    albumPreviewTitle.innerHTML = this.title;
  }

  changeDescription(newdescription, albumPreviewDescription) {
    this.description = newdescription.value;
    albumPreviewDescription.innerHTML = this.description;
  }

  toggleNewForm(e) {  
    e.preventDefault();
    this.activeNewForm = !this.activeNewForm;
  }

  createAlbum(e, newtitle, newdescription, albumPreviewPhoto) {
    e.preventDefault(); // TODO remove this
    if ((this.title != '') && (this.description != '') && (this.thumb != '')) {
      
        let album = { "title": this.title, "description": this.description, "thumb": this.thumb, "photos": [] };
        this._UploadService.create(album)
          .subscribe(
            res => {
              console.log('the album was created')
              this.albums.splice(0,0,album);
            }, 
            (error) => {
              alert('An unexpected error occured');
            });
          newtitle.value='';
          newdescription.value='';
          albumPreviewPhoto.src = 'http://demo.warptheme.com/images/placeholder_600x400.svg';


    } // TODO if error
  }

  uploader:FileUploader = new FileUploader({url: newURL, itemAlias: 'photo'});
  
  uploadPhoto(item, albumPreviewPhoto) {
    item.upload();
    setTimeout(()=> { // КОСТЫЛЬ
      let response = this.uploader.queue["0"]._xhr.response;
      let jsonResponse = JSON.parse(response);
      this.thumb = 'uploads/album-thumbs/' + jsonResponse.data[0].filename; 
      albumPreviewPhoto.src = this.thumb;
    }, 5000); 
  }

  hasBaseDropZoneOver:boolean = false;
   
  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
}

