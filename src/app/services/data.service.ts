import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app.error';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private result:any;
  param = '';
  constructor(private _url: string, private _http: Http) {
  }
  
  getAll(param?) {
    if (param != undefined) {
      return this._http.get(this._url+'/'+param)
        .map(result => this.result = result.json().data);
    } else {
      return this._http.get(this._url)
        .map(result => this.result = result.json().data);
    }
  }

  create(resourse) {
    return this._http.post(this._url, resourse)
      .map(result => this.result = result.json().data)
  }

  delete(id, param?) {
    return this._http.put(this._url + "/" + id, { "param": param });
  }

  update(id, newdata) {
    return this._http.patch(this._url + "/" + id, newdata)
  }
}
