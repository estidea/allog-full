import { ImplementjsService } from './../services/implementjs.service';
import { UploadService } from './../services/upload.service';
import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Observable } from 'rxjs/Observable';


const newURL = '/api/photos/new';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  albums = [];
  activeNewForm = false;
  isEdited = false;
  title = '';
  description = '';
  thumb = '';
  editedAlbum = {
    "_id": '',
    "title": '',
    "description": '',
    "thumb": '',
    "oldTitle": ''
  }

  constructor(private _UploadService: UploadService, private _implementService: ImplementjsService) { } 

  ngOnInit() {
    this._implementService.runMaterializeModal()
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
  /* UPLOAD THE PHOTOS */ 
  uploader:FileUploader = new FileUploader({url: newURL, itemAlias: 'photo'});
  
  uploadPhoto(item, albumPreviewPhoto) {
    item.upload();
    item.onSuccess = function(response, status, headers) {
      let resp = this.uploader.queue["0"]._xhr.response;
      let jsonResponse = JSON.parse(resp);
      this.thumb = 'uploads/album-thumbs/' + jsonResponse.data[0].filename; 
      albumPreviewPhoto.src = this.thumb;
    }
  }

  hasBaseDropZoneOver:boolean = false;
  
  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
  
  /* CREATE NEW ALBUM */
  createAlbum(e, newtitle, newdescription, albumPreviewPhoto, albumPreviewTitle, albumPreviewDescription) {
    e.preventDefault();
    this.thumb = albumPreviewPhoto.src;
    if ((this.title != '') && (this.description != '') && (this.thumb != '')) {
      
        let album = { "title": this.title, "description": this.description, "thumb": this.thumb};
        this._UploadService.create(album)
          .subscribe(
            res => {
              console.log('the album was created')
              this.albums.splice(0,0,album);
            }, 
            (error) => {
              alert('An unexpected error occured');
            });
          albumPreviewTitle.innerHTML='Название альбома';
          newtitle.value='';
          albumPreviewDescription.innerHTML='Описание альбома';
          newdescription.value='';
          albumPreviewPhoto.src = 'http://demo.warptheme.com/images/placeholder_600x400.svg';


    } else {console.log(this.title, this.description, this.thumb);} // TODO Error handler
  }
  // DELETE ALBUM
  removeAlbum(album) {
    this._UploadService.delete(album._id, album.title)
      .subscribe(
        res => {
          let index = this.albums.indexOf(album);
          this.albums.splice(index, 1);
        }, 
        (error) => {
          alert('An unexpected error occured');
      }); 
  }
  // EDIT ALBUM
  editAlbum(album, edittitle, editdescription) {
    this.isEdited = !this.isEdited;
    this.editedAlbum._id = album._id;
    this.editedAlbum.thumb = album.thumb;
    this.editedAlbum.title = album.title;
    this.editedAlbum.description = album.description;
    this.editedAlbum.oldTitle = album.title;
  }

  changeEditDescription(editdescription) {
    editdescription.value = this.editedAlbum.description;
  }

  changeEditTitle(edittitle) {
    edittitle.value = this.editedAlbum.title;
  }
  
  changeEditPhoto(item) {
    item.upload();
    let that = this;
    item.onSuccess = function(response, status, headers) {
      let resp = this.uploader.queue["0"]._xhr.response;
      let jsonResponse = JSON.parse(resp);
      that.editedAlbum.thumb = 'uploads/album-thumbs/' + jsonResponse.data[0].filename;
    }
  }

  saveEditedAlbum(e, edittitle, editdescription) {
    e.preventDefault();
    this.editedAlbum.title = edittitle.value
    this.editedAlbum.description = editdescription.value
    let index = this.albums.findIndex(x => x.title==this.editedAlbum.title);
    this.albums.splice(index, 1, this.editedAlbum);
    this._UploadService.update(this.editedAlbum._id, this.editedAlbum)
      .subscribe(res => {
      }, error => {
        alert('An unexpected error occured');
     });
  }
  // updateTask(task, newdata: HTMLInputElement) { 
  //   let updtask = { "title": newdata.value, "isDone": task.isDone};
  //   this._postsService.update(task._id, { title: newdata.value, isDone: task.isDone })
  //     .subscribe(res => {
  //       updtask['_id'] = task._id;
  //       let index = this.tasks.indexOf(task);
  //       this.tasks.splice(index, 1, updtask);
  //     }, error => {
  //       alert('An unexpected error occured');
  //     });
  // }  

}

