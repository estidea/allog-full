import { Component, OnInit } from '@angular/core';
import { ImplementjsService } from '../services/implementjs.service';

@Component({
  selector: 'app-rescent-instagram',
  templateUrl: './rescent-instagram.component.html',
  styleUrls: ['./rescent-instagram.component.css']
})
export class RescentInstagramComponent implements OnInit {

  constructor(private _implementService: ImplementjsService) { }

  ngOnInit() {
    this._implementService.runInitInstaphotos();
  }

  

}
