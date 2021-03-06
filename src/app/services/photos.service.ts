import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class PhotosService extends DataService {
  constructor(_http: Http) {
    super("/api/photos", _http);
  }
}