import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class TasksService extends DataService {
  constructor(_http: Http) {
    super("/api/tasks", _http);
  }
}
