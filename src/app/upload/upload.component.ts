import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

// const URL = '/api/';
const newURL = '/api/photos/new';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  
  uploader:FileUploader = new FileUploader({url: newURL, itemAlias: 'photo'});

  hasBaseDropZoneOver:boolean = false;
 
  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
}
