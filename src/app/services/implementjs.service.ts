import { Injectable } from '@angular/core';
declare var swiperLoad:any;
declare var initMaterialize:any;

@Injectable()
export class ImplementjsService {

  constructor() { }
  
  runSwiper() {
    return swiperLoad();
  }

  runMaterialize() {
    return initMaterialize();
  }
}
