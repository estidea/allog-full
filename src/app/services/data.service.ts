import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app.error';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private result:any;
  
  constructor(private _url: string, private _http: Http) {
  }
  
  getAll() {
    return this._http.get(this._url)
      .map(result => this.result = result.json().data);
  }

  create(resourse) {
    return this._http.post(this._url, resourse)
      .map(result => this.result = result.json().data)
  }

  delete(id) {
    return this._http.delete(this._url + "/" + id);
  }

  update(id, newdata) {
    return this._http.patch(this._url + "/" + id, newdata)
  }
}
