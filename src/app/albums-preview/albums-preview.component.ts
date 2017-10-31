import { ImplementjsService } from './../services/implementjs.service';
import { UploadService } from './../services/upload.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums-preview',
  templateUrl: './albums-preview.component.html',
  styleUrls: ['./albums-preview.component.css']
})
export class AlbumsPreviewComponent implements OnInit {
  albums = [];
  constructor(private _UploadService: UploadService, private _implementService: ImplementjsService) { }

  ngOnInit() {
    this._UploadService.getAll()
    .subscribe(albums => {
       this.albums = albums;
       setTimeout(()=>{
        this._implementService.runSwiper();
        console.log('222');
       },2000);
       
    }, error => {
      alert('An unexpected error occured');
    });
  }

  // ngAfterViewInit(){
  //   this._implementService.runSwiper();
  //  }

}
