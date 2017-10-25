import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  title = '';
  constructor(private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.paramMap
      .subscribe(params => {
        //key = album.title
        this.title = params.get('album');
      });
  }

}
