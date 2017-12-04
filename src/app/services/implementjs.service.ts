import { Injectable } from '@angular/core';
declare const swiperLoad:any;
declare const initMaterialize:any;
declare const initMaterializeModal:any;
declare const brickLayerLoad:any;
declare const closeModalBgLayer:any;

@Injectable()
export class ImplementjsService {

  constructor() { }
  
  runSwiper() {
    return swiperLoad();
  }

  runMaterialize() {
    return initMaterialize();
  }

  runMaterializeModal() {
    return initMaterializeModal();
  }

  runBrickLayerLoad() {
    return brickLayerLoad();
  }

  runCloseModalBgLayer() {
    return closeModalBgLayer();
  }
  
}
