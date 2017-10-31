import { ImplementjsService } from './../services/implementjs.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private _service: ImplementjsService) {
    
   }

  ngOnInit() {
    this._service.runMaterialize();
  }

}
