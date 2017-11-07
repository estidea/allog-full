webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about-examples/about-examples.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-thumb {\n    max-width: 32%;\n    height: auto;\n    float: left;\n    margin: 0 .5rem .5rem 0;\n}\n\n@media (max-width: 600px) {\n    .img-thumb {\n        max-width: 100%;\n    }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-examples/about-examples.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"center-align\">Случайные работы</h3>\n<div class=\"row\">\n    <a *ngFor=\"let photo of photos\" href=\"#\"> \n        <img class=\"responsive-img img-thumb\" src=\"{{ photo.destination.substr(7) + '/' + photo.filename }}\">\n    </a>\n    \n</div>"

/***/ }),

/***/ "../../../../../src/app/about-examples/about-examples.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_photos_service__ = __webpack_require__("../../../../../src/app/services/photos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutExamplesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutExamplesComponent = (function () {
    function AboutExamplesComponent(_PhotosService) {
        this._PhotosService = _PhotosService;
        this.photos = [];
    }
    AboutExamplesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._PhotosService.getAll()
            .subscribe(function (photos) {
            _this.photos = photos;
        }, function (error) {
            console.log('An unexpected error occured');
        });
    };
    return AboutExamplesComponent;
}());
AboutExamplesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-about-examples',
        template: __webpack_require__("../../../../../src/app/about-examples/about-examples.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about-examples/about-examples.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_photos_service__["a" /* PhotosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_photos_service__["a" /* PhotosService */]) === "function" && _a || Object])
], AboutExamplesComponent);

var _a;
//# sourceMappingURL=about-examples.component.js.map

/***/ }),

/***/ "../../../../../src/app/about-photographer/about-photographer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .card.horizontal .card-image {\n    max-width: 30%;\n} */\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-photographer/about-photographer.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- <h3 class=\"center-align\">О фотографе</h3> -->\n  <!-- <div class=\"col m10 offset-m1 l12\"> -->\n      <!-- <div class=\"col s12 m7\"> -->\n  <h3 class=\"center-align\">Обо мне</h3>\n  <div class=\"card horizontal\">\n    <div class=\"row\" style=\"margin-bottom: 0;\">\n\n      <div class=\"col s10 m8 offset-m2 offset-s1 l4 xl4\" style=\"line-height: 0;\">\n        <img class=\"responsive-img\" src=\"assets/img/alina.jpg\">\n      </div>\n      \n      <div class=\"col s12 m12 l8 xl8\">\n        <div class=\"card-stacked\">\n          <div class=\"card-content\">\n              <p class=\"flow-text\">Добрый день!</p>\n              <p class=\"flow-text\">Я Алина. И текст.</p>\n              <p class=\"flow-text\">Я Алина. И текст.</p>\n              <p class=\"flow-text\">Я Алина. И текст.</p>\n              <p class=\"flow-text\">Я Алина. И текст.</p>\n              <p class=\"flow-text\">Я Алина. И текст.</p>\n\n          </div>\n          <div class=\"card-action\">\n            <a routerLink=\"/about\">Подробнее</a>\n          </div>\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/about-photographer/about-photographer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPhotographerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPhotographerComponent = (function () {
    function AboutPhotographerComponent() {
    }
    AboutPhotographerComponent.prototype.ngOnInit = function () {
    };
    return AboutPhotographerComponent;
}());
AboutPhotographerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about-photographer',
        template: __webpack_require__("../../../../../src/app/about-photographer/about-photographer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about-photographer/about-photographer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutPhotographerComponent);

//# sourceMappingURL=about-photographer.component.js.map

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (min-width: 1201px) {\n    .row .col.xl4 {\n        line-height: 0;\n    }\n}\n\n.container .row {\n    margin: 0;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <app-about-photographer></app-about-photographer>\n</div>\n<div class=\"parallax-container valign-wrapper\" style=\"min-height: 320px;\">\n  <div class=\"parallax\"><img src=\"assets/img/ch-b.jpg\" alt=\"Unsplashed background img 2\"></div>\n</div>\n<div class=\"container\">\n   <app-about-examples></app-about-examples>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/album/album.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-drop-zone { border: dotted 3px lightgray; }\n.nv-file-over { border: dotted 3px red; } /* Default class applied to drop zones on over */\n.another-file-over-class { border: dotted 3px green; }\n\nhtml, body { height: 100%; }\n\n.photo-container-wrapper {\n\n}\n\n.photo-div {\n    height:300px;\n    background-size: cover;\n    background-position: center center;\n}\n\n.photo-div:hover {\n    /*opacity: .8;*/\n    box-shadow: inset 0 0 0 2px black;\n\n}\n\n.fine-button {\n    background-color: rgba(0, 0, 0, 0.58);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/album/album.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"auth.isAuthenticated()\" class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-3\">\n        <h3>Выберите файлы</h3>\n        <div ng2FileDrop\n          [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n          (fileOver)=\"fileOverBase($event)\"\n          [uploader]=\"uploader\"\n          class=\"well my-drop-zone\">\n          Перетяните фотографии в эту зону\n        </div>\n        Или нажмите на кнопку\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\n    </div>\n\n    <div class=\"col-md-9\" style=\"margin-bottom: 40px\">\n\n        <h3>Очередь загрузки</h3>\n        <p>Количество фотографий: {{ uploader?.queue?.length }}</p>\n\n        <table class=\"table\">\n            <thead>\n            <tr>\n                <th width=\"50%\">Имя</th>\n                <th>Размер</th>\n                <th>Состояние</th>\n                <th>Статус</th>\n                <th>Действия</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let item of uploader.queue\">\n                <td><strong>{{ item?.file?.name }}</strong></td>\n                <td nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                <td>\n                    <div class=\"progress\" style=\"margin-bottom: 0;\">\n                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                    </div>\n                </td>\n                <td class=\"text-center\">\n                    <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n                    <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n                    <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n                </td>\n                <td nowrap>\n                    <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                            (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                        <span class=\"glyphicon glyphicon-ban-circle\"></span> Отменить\n                    </button>\n                    <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                            (click)=\"item.remove()\">\n                        <span class=\"glyphicon glyphicon-trash\"></span> Удалить\n                    </button>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n\n        <div>\n            <div>\n                Загружено:\n                <div class=\"progress\" style=\"\">\n                    <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                </div>\n            </div>\n            \n            <button type=\"button\" class=\"btn btn-success btn-s\"\n                    (click)=\"uploadAllPhotos($event, uploader.queue)\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                <span class=\"glyphicon glyphicon-upload\"></span> Загрузить все\n            </button>\n            <button type=\"button\" class=\"btn btn-warning btn-s\"\n                    (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                <span class=\"glyphicon glyphicon-ban-circle\"></span> Отменить все\n            </button>\n            <button type=\"button\" class=\"btn btn-danger btn-s\"\n                    (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                <span class=\"glyphicon glyphicon-trash\"></span> Удалить все\n            </button>\n        </div>\n    </div>\n  </div>\n</div>\n<div class=\"photo-container-wrapper\">\n    <div class=\"row\">\n        <div \n            *ngFor=\"let photo of photos\" \n            class=\"col s12 m4 photo-div\" \n            [ngStyle]=\"{'background-image': 'url(' + photo.destination.substr(7) + '/' + photo.filename + ')'}\"\n            >\n            <a *ngIf=\"auth.isAuthenticated()\"\n                (click)=\"removePhoto(photo)\" \n                class=\"btn-floating btn-large waves-effect waves-light fine-button\"><i class=\"material-icons\">delete</i></a>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/album/album.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_photos_service__ = __webpack_require__("../../../../../src/app/services/photos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// const newURL = '/api/photos/new';
var AlbumComponent = (function () {
    function AlbumComponent(auth, _route, _PhotosService) {
        this.auth = auth;
        this._route = _route;
        this._PhotosService = _PhotosService;
        this.title = '';
        this.url = '/api/photos/new/';
        this.photos = [];
        this.hasBaseDropZoneOver = false;
    }
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this._Implementservice.runBricklayer();
        this._route.paramMap
            .subscribe(function (params) {
            //key = album.title
            _this.title = params.get('album');
            _this.url = _this.url + _this.title;
            _this.uploader = new __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileUploader"]({ url: _this.url, itemAlias: 'photo' });
        });
        this._PhotosService.getAll(this.title)
            .subscribe(function (photos) {
            _this.photos = photos;
        }, function (error) {
            alert('An unexpected error occured');
        });
    };
    AlbumComponent.prototype.uploadAllPhotos = function (e, items) {
        e.preventDefault();
        var that = this;
        var destination = './dist/uploads/' + this.title + '/';
        items.forEach(function (item, index) {
            item.upload();
            item.onSuccess = function (response, status, headers) {
                var resp = this.uploader.queue[index]._xhr.response;
                var jsonResponse = JSON.parse(resp);
                var filename = jsonResponse.data[0].filename;
                var id = jsonResponse.data[0]._id;
                var newPhoto = { "_id": id, "destination": destination, "filename": filename };
                that.photos.splice(0, 0, newPhoto);
            };
        });
    };
    AlbumComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    AlbumComponent.prototype.removePhoto = function (photo) {
        var _this = this;
        var destination = './dist/uploads/' + this.title + '/' + photo.filename;
        this._PhotosService.delete(photo._id, destination)
            .subscribe(function (res) {
            var index = _this.photos.indexOf(photo);
            _this.photos.splice(index, 1);
        }, function (error) {
            alert('An unexpected error occured');
        });
    };
    return AlbumComponent;
}());
AlbumComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-album',
        template: __webpack_require__("../../../../../src/app/album/album.component.html"),
        styles: [__webpack_require__("../../../../../src/app/album/album.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_photos_service__["a" /* PhotosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_photos_service__["a" /* PhotosService */]) === "function" && _c || Object])
], AlbumComponent);

var _a, _b, _c;
//# sourceMappingURL=album.component.js.map

/***/ }),

/***/ "../../../../../src/app/albums-preview/albums-preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-caption {\n    position: absolute;\n    bottom: 1rem;\n    font-size: 3rem;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.48);\n    color: white;\n}\n\n@media (max-width:600px) {\n    .image-caption {\n        font-size: 1.4rem;\n    }\n}\n\n@media (max-width:992px) {\n    .image-caption {\n        font-size: 2rem;\n    }\n}\n\n\n.swiper-slide {\n    height: 20rem;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n\n\n.swiper-link-img {\n    display: block;\n    width: 100%;\n}\n\n.swiper-img {\n    width:100%;\n}\n\n.hrefdiv {\n    text-indent: -9999px;\n    width: 100%;\n    height: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/albums-preview/albums-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"swiper-container\">\n    <div class=\"swiper-wrapper\">\n      <div \n        *ngFor=\"let album of albums\" \n        class=\"swiper-slide\" \n        [ngStyle]=\"{'background-image': 'url(' + album.thumb +')'}\">\n        <a [routerLink]=\"['/portfolio', album.title]\" class=\"hrefdiv\">\n          Go to album\n        </a>\n        <div class=\"image-caption light\">\n          {{ album.title }}\n        </div>\n      </div>\n\n    </div>\n    <!-- Add Pagination -->\n    <div class=\"swiper-pagination\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/albums-preview/albums-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_implementjs_service__ = __webpack_require__("../../../../../src/app/services/implementjs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumsPreviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumsPreviewComponent = (function () {
    function AlbumsPreviewComponent(_UploadService, _implementService) {
        this._UploadService = _UploadService;
        this._implementService = _implementService;
        this.albums = [];
    }
    AlbumsPreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._UploadService.getAll()
            .subscribe(function (albums) {
            _this.albums = albums;
        }, function (error) {
            alert('An unexpected error occured');
        });
    };
    AlbumsPreviewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._implementService.runSwiper();
        this.mylist.changes.subscribe(function () { return _this._implementService.runSwiper(); });
    };
    return AlbumsPreviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChildren"])('mylocalvar'),
    __metadata("design:type", Object)
], AlbumsPreviewComponent.prototype, "mylist", void 0);
AlbumsPreviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-albums-preview',
        template: __webpack_require__("../../../../../src/app/albums-preview/albums-preview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/albums-preview/albums-preview.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_upload_service__["a" /* UploadService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_implementjs_service__["a" /* ImplementjsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_implementjs_service__["a" /* ImplementjsService */]) === "function" && _b || Object])
], AlbumsPreviewComponent);

var _a, _b;
//# sourceMappingURL=albums-preview.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n    <router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
        auth.handleAuthentication();
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_photos_service__ = __webpack_require__("../../../../../src/app/services/photos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_implementjs_service__ = __webpack_require__("../../../../../src/app/services/implementjs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_tasks_service__ = __webpack_require__("../../../../../src/app/services/tasks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gallery_gallery_component__ = __webpack_require__("../../../../../src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__upload_upload_component__ = __webpack_require__("../../../../../src/app/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__albums_preview_albums_preview_component__ = __webpack_require__("../../../../../src/app/albums-preview/albums-preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__about_examples_about_examples_component__ = __webpack_require__("../../../../../src/app/about-examples/about-examples.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__rescent_instagram_rescent_instagram_component__ = __webpack_require__("../../../../../src/app/rescent-instagram/rescent-instagram.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__social_links_social_links_component__ = __webpack_require__("../../../../../src/app/social-links/social-links.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__image_detail_image_detail_component__ = __webpack_require__("../../../../../src/app/image-detail/image-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__blog_blog_component__ = __webpack_require__("../../../../../src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__about_photographer_about_photographer_component__ = __webpack_require__("../../../../../src/app/about-photographer/about-photographer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__album_album_component__ = __webpack_require__("../../../../../src/app/album/album.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// angular2-jwt config
// import { AuthHttp, AuthConfig } from 'angular2-jwt';


















// export function authHttpServiceFactory(http: Http, options: RequestOptions) {
//   return new AuthHttp(new AuthConfig(), http, options);
// }
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_15_ng2_file_upload__["FileDropDirective"],
            __WEBPACK_IMPORTED_MODULE_15_ng2_file_upload__["FileSelectDirective"],
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__gallery_gallery_component__["a" /* GalleryComponent */],
            __WEBPACK_IMPORTED_MODULE_13__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__upload_upload_component__["a" /* UploadComponent */],
            __WEBPACK_IMPORTED_MODULE_16__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_17__albums_preview_albums_preview_component__["a" /* AlbumsPreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_18__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_19__about_examples_about_examples_component__["a" /* AboutExamplesComponent */],
            __WEBPACK_IMPORTED_MODULE_20__rescent_instagram_rescent_instagram_component__["a" /* RescentInstagramComponent */],
            __WEBPACK_IMPORTED_MODULE_21__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_22__social_links_social_links_component__["a" /* SocialLinksComponent */],
            __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_23__image_detail_image_detail_component__["a" /* ImageDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_24__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_25__blog_blog_component__["a" /* BlogComponent */],
            __WEBPACK_IMPORTED_MODULE_26__about_photographer_about_photographer_component__["a" /* AboutPhotographerComponent */],
            __WEBPACK_IMPORTED_MODULE_27__album_album_component__["a" /* AlbumComponent */],
            __WEBPACK_IMPORTED_MODULE_28__login_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
                { path: 'about', component: __WEBPACK_IMPORTED_MODULE_18__about_about_component__["a" /* AboutComponent */] },
                { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_12__gallery_gallery_component__["a" /* GalleryComponent */] },
                { path: 'login', component: __WEBPACK_IMPORTED_MODULE_28__login_login_component__["a" /* LoginComponent */] },
                { path: 'portfolio/:album', component: __WEBPACK_IMPORTED_MODULE_27__album_album_component__["a" /* AlbumComponent */] },
                { path: '**', component: __WEBPACK_IMPORTED_MODULE_24__not_found_not_found_component__["a" /* NotFoundComponent */] },
            ]),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_5__services_tasks_service__["a" /* TasksService */],
            __WEBPACK_IMPORTED_MODULE_3__services_implementjs_service__["a" /* ImplementjsService */],
            __WEBPACK_IMPORTED_MODULE_2__services_upload_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_1__services_photos_service__["a" /* PhotosService */],
            __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]
            // {
            //   provide: AuthHttp,
            //   useFactory: authHttpServiceFactory,
            //   deps: [Http, RequestOptions]
            // }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Tasks application</h1>\n  <form class=\"well\">\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"\" id=\"\" class=\"form-control\" placeholder=\"Add Task\" />\n    </div>\n  </form>\n<!-- \n  <div *ngFor=\"let todo of todos\" class=\"task-list\">\n    <div class=\"col-md-1\"><input type=\"checkbox\" name=\"\" id=\"\">\n    </div>\n    <div class=\"col-md-7\">\n      {{ todo.title }}\n    </div>\n    <div class=\"col-md-4\">\n      <input type=\"button\" value=\"Update\" class=\"btn btn-info\" />\n      <input type=\"button\" value=\"Delete\" class=\"btn btn-danger\" />\n    </div> -->\n  <!-- </div> -->"

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_tasks_service__ = __webpack_require__("../../../../../src/app/services/tasks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_error_404__ = __webpack_require__("../../../../../src/app/common/error-404.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_not_found_error__ = __webpack_require__("../../../../../src/app/common/not-found-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogComponent = (function () {
    function BlogComponent(_postsService) {
        this._postsService = _postsService;
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._postsService.getAll()
            .subscribe(function (tasks) {
            _this.tasks = tasks;
        }, function (error) {
            alert('An unexpected error occured');
        });
    };
    BlogComponent.prototype.addTask = function (newtask) {
        var _this = this;
        var task = { "title": newtask.value, "isDone": false };
        this._postsService.create({ title: newtask.value, isDone: false })
            .subscribe(function (res) {
            task['_id'] = res._id;
            _this.tasks.splice(0, 0, task);
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__common_error_404__["a" /* Error404 */])
                alert('Bot blin!');
            else
                alert('An unexpected error occured');
        });
        newtask.value = '';
    };
    BlogComponent.prototype.removeTask = function (task) {
        var _this = this;
        this._postsService.delete(task._id)
            .subscribe(function (res) {
            var index = _this.tasks.indexOf(task);
            _this.tasks.splice(index, 1);
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_2__common_not_found_error__["a" /* NotFoundError */])
                alert('this post has already been deleted');
            else
                alert('An unexpected error occured');
            "";
        });
    };
    BlogComponent.prototype.updateTask = function (task, newdata) {
        var _this = this;
        var updtask = { "title": newdata.value, "isDone": task.isDone };
        this._postsService.update(task._id, { title: newdata.value, isDone: task.isDone })
            .subscribe(function (res) {
            updtask['_id'] = task._id;
            var index = _this.tasks.indexOf(task);
            _this.tasks.splice(index, 1, updtask);
        }, function (error) {
            alert('An unexpected error occured');
        });
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-blog',
        template: __webpack_require__("../../../../../src/app/blog/blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/blog/blog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_tasks_service__["a" /* TasksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_tasks_service__["a" /* TasksService */]) === "function" && _a || Object])
], BlogComponent);

var _a;
//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/common/app.error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppError; });
var AppError = (function () {
    function AppError(originalError) {
        this.originalError = originalError;
    }
    return AppError;
}());

//# sourceMappingURL=app.error.js.map

/***/ }),

/***/ "../../../../../src/app/common/error-404.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_error__ = __webpack_require__("../../../../../src/app/common/app.error.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error404; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Error404 = (function (_super) {
    __extends(Error404, _super);
    function Error404() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Error404;
}(__WEBPACK_IMPORTED_MODULE_0__app_error__["a" /* AppError */]));

//# sourceMappingURL=error-404.js.map

/***/ }),

/***/ "../../../../../src/app/common/not-found-error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_error__ = __webpack_require__("../../../../../src/app/common/app.error.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundError; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NotFoundError = (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotFoundError;
}(__WEBPACK_IMPORTED_MODULE_0__app_error__["a" /* AppError */]));

//# sourceMappingURL=not-found-error.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer teal\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col l6 s12\">\n        <h5 class=\"white-text\">Company Bio</h5>\n        <p class=\"grey-text text-lighten-4\">This is website-portfolio of the best photographer Alina Logvinova!</p>\n\n\n      </div>\n      <div class=\"col l3 s12\">\n        <h5 class=\"white-text\">Menu</h5>\n        <ul>\n          <li><a class=\"white-text\" href=\"#!\">Home</a></li>\n          <li><a class=\"white-text\" href=\"#!\">Portfolio</a></li>\n          <li><a class=\"white-text\" href=\"#!\">About me</a></li>\n          <li><a class=\"white-text\" href=\"#!\">Contacts</a></li>\n        </ul>\n      </div>\n      <div class=\"col l3 s12\">\n        <h5 class=\"white-text\">Social Links</h5>\n        <ul>\n          <li><a class=\"white-text\" href=\"#!\">Vk</a></li>\n          <li><a class=\"white-text\" href=\"#!\">Instagram</a></li>\n          <li><a class=\"white-text\" href=\"#!\">Facebook</a></li>\n          <li><a class=\"white-text\" href=\"#!\">Flikr</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-copyright\">\n    <div class=\"container\">\n      Development by <a class=\"brown-text text-lighten-3\" href=\"http://vk.com/palemoon\">Palemoon</a>\n      Components by <a class=\"brown-text text-lighten-3\" href=\"http://materializecss.com\">Materialize</a>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-drop-zone { border: dotted 3px lightgray; }\n.nv-file-over { border: dotted 3px red; } /* Default class applied to drop zones on over */\n.another-file-over-class { border: dotted 3px green; }\n\nhtml, body { height: 100%; }\n\n.fine-button-edit {\n    position: absolute;\n    left: 1rem;\n  }\n\n.fine-button-delete {\n    position: absolute;\n    left: 5rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"center-align\">Портфолио</h3>\n<div class=\"container\">\n<div class=\"row\">\n  <div *ngFor=\"let album of albums\" class=\"col s12 m6\">\n    <div class=\"card large\">\n      <div class=\"card-image\">\n        <a *ngIf=\"auth.isAuthenticated()\"\n          href=\"#modal1\"\n          (click)=\"editAlbum(album, edittitle, editdescription)\"\n          class=\"btn-floating btn-large modal-trigger waves-effect waves-light fine-button fine-button-edit\"><i class=\"material-icons\">edit</i></a>\n        <a *ngIf=\"auth.isAuthenticated()\"\n          href=\"#modal2\"\n          (click)=\"addToRemovedAlbum(album)\"\n          class=\"btn-floating btn-large modal-trigger waves-effect waves-light fine-button fine-button-delete\"><i class=\"material-icons\">delete</i></a>\n        <a [routerLink]=\"['/portfolio', album.title]\">\n        <img class=\"scaleable opacity-hover\" src=\"{{ album.thumb }}\"></a>\n        <span class=\"card-title\">{{ album.title }}</span>\n      </div>\n      <div class=\"card-content\">\n        {{ album.description }}\n      </div>\n      <div class=\"card-action\">\n      <a class=\"waves-effect waves-light btn\" [routerLink]=\"['/portfolio', album.title]\">Перейти к альбому</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"auth.isAuthenticated()\" class=\"row\">\n<!-- ADD PHOTOALBUM -->\n  <div class=\"col s12 m6\">\n    <div class=\"card large\">\n      <div class=\"card-image\">\n        <img #albumPreviewPhoto class=\"scaleable opacity-hover\" src=\"http://demo.warptheme.com/images/placeholder_600x400.svg\">\n        <span \n          #albumPreviewTitle\n          class=\"card-title\" \n          style=\"width:100%\"\n          >Название альбома</span>\n      </div>\n      <div class=\"card-content\">\n        <p #albumPreviewDescription>Описание альбома</p>\n      </div>\n      <div class=\"card-action\">\n      <a \n        #showButton\n        class=\"waves-effect waves-light btn\" \n        (click)=\"toggleNewForm($event)\"\n        href=\"#showform\">Новый альбом</a>\n      </div>\n    </div>\n  </div>\n<!-- CREATE ALBUM FORM -->\n\n  <div *ngIf=\"activeNewForm && auth.isAuthenticated()\" class=\"col s12 m6\">\n      <div class=\"card large\">\n        <div class=\"card-image\" style=\"background-color:white\">\n          <div ng2FileDrop\n            [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n            (fileOver)=\"fileOverBase($event)\"\n            [uploader]=\"uploader\"\n            class=\"well my-drop-zone\"\n            style=\"height:3rem;padding: .5rem;\">\n            Перетяните фотографии в эту зону\n          </div>\n          <div class=\"file-field input-field\">\n            <div class=\"btn\">\n              <span>Или нажмите</span>\n              <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  />\n            </div>\n            <div class=\"file-path-wrapper\">\n              <input class=\"file-path validate\" type=\"text\">\n            </div>\n          </div>\n          \n          <br/>\n            <div *ngFor=\"let item of uploader.queue\">\n            <button type=\"button\" class=\"btn btn-success btn-xs\"\n              (click)=\"uploadPhoto(uploader.queue[0], albumPreviewPhoto)\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n              <span class=\"glyphicon glyphicon-upload\"></span> Загрузить\n            </button>\n            <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                <span class=\"glyphicon glyphicon-ban-circle\"></span> Отменить\n            </button>\n            <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                    (click)=\"item.remove(item)\">\n                <span class=\"glyphicon glyphicon-trash\"></span> Удалить\n            </button>\n          </div>\n        </div>\n        <div class=\"card-content\" style=\"max-height: 100%;\">\n          <div class=\"input-field\">\n            <input \n              #newtitle\n              (change)=\"changeTitle(newtitle, albumPreviewTitle)\"\n              id=\"album_title\" type=\"text\" class=\"validate\">\n            <label for=\"album_title\">Album title</label>\n          </div>\n          <div class=\"input-field\">\n            <textarea \n              #newdescription\n              (change)=\"changeDescription(newdescription, albumPreviewDescription)\"\n              id=\"album_description\" class=\"materialize-textarea\"></textarea>\n            <label for=\"album_description\">Album description</label>\n          </div>\n        </div>\n        <div class=\"card-action\">\n          <a \n            #submitButton\n            (click)=\"createAlbum($event, newtitle, newdescription, albumPreviewPhoto, albumPreviewTitle, albumPreviewDescription)\"\n            class=\"waves-effect waves-light btn\" \n            href=\"/portfolio\">Добавить альбом</a>\n        </div>\n      </div>\n    </div>\n\n</div>\n\n  <!-- EDIT ALBUM -->\n  <div *ngIf=\"auth.isAuthenticated()\" id=\"modal1\" class=\"modal modal-fixed-footer\">\n    <div class=\"modal-content\">\n      <h4 class=\"center-align\">Редактировать альбом</h4>\n      <div class=\"col s12 m6\">\n        <div class=\"card large\">\n          <div class=\"card-image\" style=\"background-color:white\">\n            <div ng2FileDrop\n              [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n              (fileOver)=\"fileOverBase($event)\"\n              [uploader]=\"uploader\"\n              class=\"well my-drop-zone\"\n              style=\"height:3rem;padding: .5rem;\">\n              Перетяните новую фото в эту зону\n            </div>\n            <div class=\"file-field input-field\">\n              <div class=\"btn\">\n                <span>Или нажмите</span>\n                <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  />\n              </div>\n              <div class=\"file-path-wrapper\">\n                <input class=\"file-path validate\" type=\"text\">\n              </div>\n            </div>\n            \n            <br/>\n              <div *ngFor=\"let item of uploader.queue\">\n              <button type=\"button\" class=\"btn btn-success btn-xs\"\n                (click)=\"changeEditPhoto(uploader.queue[0])\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                <span class=\"glyphicon glyphicon-upload\"></span> Загрузить\n              </button>\n              <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                  (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                  <span class=\"glyphicon glyphicon-ban-circle\"></span> Отменить\n              </button>\n              <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                      (click)=\"item.remove(item)\">\n                  <span class=\"glyphicon glyphicon-trash\"></span> Удалить\n              </button>\n            </div>\n          </div>\n          <div class=\"card-content\" style=\"max-height: 100%;\">\n            <div class=\"input-field\">\n              <input \n                #edittitle\n                (click)=\"changeEditTitle(edittitle)\"\n                id=\"album_title\" type=\"text\" class=\"validate\">\n              <label for=\"album_title\">New title</label>\n            </div>\n            <div class=\"input-field\">\n              <textarea \n                (click)=\"changeEditDescription(editdescription)\"\n                #editdescription\n                id=\"album_description\" class=\"materialize-textarea\"></textarea>\n              <label class=\"\" for=\"album_description\">New description</label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <a \n        (click)=\"saveEditedAlbum($event, edittitle, editdescription)\"\n        href=\"/portfolio\" \n        class=\"modal-action modal-close waves-effect waves-green btn-flat\">Сохранить</a>\n    </div>\n  </div>\n\n    <!-- ARE YOU SURE MODAL -->\n    <div *ngIf=\"auth.isAuthenticated()\" id=\"modal2\" class=\"modal modal-fixed-footer\">\n      <div class=\"modal-content\">\n       <h4>Вы уверены, что хотите удалить альбом?</h4>\n       <p>Удалятся также и все фотографии в альбоме.</p>\n      </div>\n      <div class=\"modal-footer\">\n        <a \n          (click)=\"removeAlbum()\"\n          href=\"/portfolio\" \n          class=\"modal-action modal-close waves-effect waves-green btn-flat\">Да</a>\n      </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_implementjs_service__ = __webpack_require__("../../../../../src/app/services/implementjs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var newURL = '/api/photos/new';
var GalleryComponent = (function () {
    function GalleryComponent(auth, _UploadService, _implementService) {
        this.auth = auth;
        this._UploadService = _UploadService;
        this._implementService = _implementService;
        this.albums = [];
        this.activeNewForm = false;
        this.isEdited = false;
        this.title = '';
        this.description = '';
        this.thumb = '';
        this.removedALbumId = 0;
        this.removedALbumTitle = '';
        this.editedAlbum = {
            "_id": '',
            "title": '',
            "description": '',
            "thumb": '',
            "oldTitle": ''
        };
        /* UPLOAD THE PHOTOS */
        this.uploader = new __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileUploader"]({ url: newURL, itemAlias: 'photo' });
        this.hasBaseDropZoneOver = false;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._implementService.runMaterializeModal();
        this._UploadService.getAll()
            .subscribe(function (albums) {
            _this.albums = albums;
        }, function (error) {
            alert('An unexpected error occured');
        });
    };
    GalleryComponent.prototype.changeTitle = function (title, albumPreviewTitle) {
        this.title = title.value;
        albumPreviewTitle.innerHTML = this.title;
    };
    GalleryComponent.prototype.changeDescription = function (newdescription, albumPreviewDescription) {
        this.description = newdescription.value;
        albumPreviewDescription.innerHTML = this.description;
    };
    GalleryComponent.prototype.toggleNewForm = function (e) {
        e.preventDefault();
        this.activeNewForm = !this.activeNewForm;
    };
    GalleryComponent.prototype.uploadPhoto = function (item, albumPreviewPhoto) {
        item.upload();
        item.onSuccess = function (response, status, headers) {
            var resp = this.uploader.queue["0"]._xhr.response;
            var jsonResponse = JSON.parse(resp);
            this.thumb = 'uploads/album-thumbs/' + jsonResponse.data[0].filename;
            albumPreviewPhoto.src = this.thumb;
        };
    };
    GalleryComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    /* CREATE NEW ALBUM */
    GalleryComponent.prototype.createAlbum = function (e, newtitle, newdescription, albumPreviewPhoto, albumPreviewTitle, albumPreviewDescription) {
        var _this = this;
        e.preventDefault();
        this.thumb = albumPreviewPhoto.src;
        if ((this.title != '') && (this.description != '') && (this.thumb != '')) {
            var album_1 = { "title": this.title, "description": this.description, "thumb": this.thumb };
            this._UploadService.create(album_1)
                .subscribe(function (res) {
                album_1['_id'] = res._id;
                _this.albums.splice(0, 0, album_1);
            }, function (error) {
                alert('An unexpected error occured');
            });
            albumPreviewTitle.innerHTML = 'Название альбома';
            newtitle.value = '';
            albumPreviewDescription.innerHTML = 'Описание альбома';
            newdescription.value = '';
            albumPreviewPhoto.src = 'http://demo.warptheme.com/images/placeholder_600x400.svg';
        }
        else {
            console.log(this.title, this.description, this.thumb);
        } // TODO Error handler
    };
    // DELETE ALBUM
    GalleryComponent.prototype.addToRemovedAlbum = function (album) {
        this.removedALbumId = album._id;
        this.removedALbumTitle = album.title;
    };
    GalleryComponent.prototype.removeAlbum = function () {
        var _this = this;
        this._UploadService.delete(this.removedALbumId, this.removedALbumTitle)
            .subscribe(function (res) {
            var index = _this.albums.findIndex(function (x) { return x.title == _this.removedALbumTitle; });
            _this.albums.splice(index, 1);
        }, function (error) {
            alert('An unexpected error occured');
        });
    };
    // EDIT ALBUM
    GalleryComponent.prototype.editAlbum = function (album, edittitle, editdescription) {
        this.isEdited = !this.isEdited;
        this.editedAlbum._id = album._id;
        this.editedAlbum.thumb = album.thumb;
        this.editedAlbum.title = album.title;
        this.editedAlbum.description = album.description;
        this.editedAlbum.oldTitle = album.title;
    };
    GalleryComponent.prototype.changeEditDescription = function (editdescription) {
        editdescription.value = this.editedAlbum.description;
    };
    GalleryComponent.prototype.changeEditTitle = function (edittitle) {
        edittitle.value = this.editedAlbum.title;
    };
    GalleryComponent.prototype.changeEditPhoto = function (item) {
        item.upload();
        var that = this;
        item.onSuccess = function (response, status, headers) {
            var resp = this.uploader.queue["0"]._xhr.response;
            var jsonResponse = JSON.parse(resp);
            that.editedAlbum.thumb = 'uploads/album-thumbs/' + jsonResponse.data[0].filename;
        };
    };
    GalleryComponent.prototype.saveEditedAlbum = function (e, edittitle, editdescription) {
        var _this = this;
        e.preventDefault();
        this.editedAlbum.title = edittitle.value;
        this.editedAlbum.description = editdescription.value;
        var index = this.albums.findIndex(function (x) { return x.title == _this.editedAlbum.title; });
        this.albums.splice(index, 1, this.editedAlbum);
        this._UploadService.update(this.editedAlbum._id, this.editedAlbum)
            .subscribe(function (res) {
        }, function (error) {
            alert('An unexpected error occured');
        });
    };
    return GalleryComponent;
}());
GalleryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-gallery',
        template: __webpack_require__("../../../../../src/app/gallery/gallery.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/gallery.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_upload_service__["a" /* UploadService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_implementjs_service__["a" /* ImplementjsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_implementjs_service__["a" /* ImplementjsService */]) === "function" && _c || Object])
], GalleryComponent);

var _a, _b, _c;
//# sourceMappingURL=gallery.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .parallax-container {\n    background: url(https://placeimg.com/1000/300/nature) no-repeat center center;\n    background-size: cover;\n} */\n.parallax-container .section {\n    margin: 3rem auto;\n}\n\n.allog-title {\n    letter-spacing: .4rem;\n    font-weight: 300;\n    font-size: 6rem;\n    display: inline-block;\n    background-color: rgba(0, 0, 0, 0.48);\n    padding: .4rem 1rem;\n    margin-bottom: 0;\n}\n\n.sub-title {\n    display: inline-block;\n    background-color: rgba(0, 0, 0, 0.48);\n    padding: .4rem 1rem;\n    text-transform: uppercase;\n    width: initial !important;\n    float: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"index-banner\" class=\"parallax-container\">\n    <div class=\"section no-pad-bot\">\n      <div class=\"container\">\n        <br><br>\n        <div class=\"row center\">\n          <h1 class=\"header allog-title\">ALLOG</h1><br>\n          <h3 class=\"header col s12 light sub-title\">photography</h3>\n        </div>\n        <br><br>\n\n      </div>\n    </div>\n    <div class=\"parallax\"><img src=\"assets/img/allog-bg.jpg\" alt=\"Unsplashed background img 1\"></div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"section\">\n    <app-albums-preview></app-albums-preview>\n</div>\n<div class=\"divider\"></div>\n<div class=\"section\">\n    <app-about></app-about>\n</div>\n<div class=\"divider\"></div>\n<div class=\"section\">\n    <app-rescent-instagram></app-rescent-instagram>\n</div>\n<div class=\"divider\"></div>\n\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_implementjs_service__ = __webpack_require__("../../../../../src/app/services/implementjs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(_service) {
        this._service = _service;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this._service.runMaterialize();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_implementjs_service__["a" /* ImplementjsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_implementjs_service__["a" /* ImplementjsService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/image-detail/image-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-detail/image-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  image-detail works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/image-detail/image-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageDetailComponent = (function () {
    function ImageDetailComponent(_route) {
        this._route = _route;
    }
    ImageDetailComponent.prototype.ngOnInit = function () {
        this._route.paramMap
            .subscribe(function (params) {
            console.log(params);
        });
    };
    return ImageDetailComponent;
}());
ImageDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-image-detail',
        template: __webpack_require__("../../../../../src/app/image-detail/image-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/image-detail/image-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], ImageDetailComponent);

var _a;
//# sourceMappingURL=image-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h4>О, Вы попали на скрытую страницу</h4>\n  <p>Вообще-то, эта страница предназначена для входа администратора</p>\n  <p>Не знаю, как Вы на неё попали =)</p> \n  <p>Вот Вам специальная кнопочка, чтобы перейти на моё портфолио и усладить свой взор фотографиями ^_^</p>\n  <a routerLink=\"/portfolio\" class=\"btn btn-success\">Перейти в портфолио</a>\n  <h4 *ngIf=\"auth.isAuthenticated() ; else nologin\">\n     <a (click)=\"auth.logout()\" class=\"btn btn-warning\">Log Out</a>\n   </h4>\n  <ng-template #nologin>\n   <h4>\n     <a (click)=\"auth.login()\" class=\"btn btn-success\">Log In</a>\n   </h4>\n  </ng-template>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(auth) {
        this.auth = auth;
        auth.handleAuthentication();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav .nav-wrapper {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n\n#logo-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: relative;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"white\" role=\"navigation\">\n  <div class=\"nav-wrapper container\">\n    <ul class=\"left hide-on-med-and-down\">\n        <li \n          routerLinkActive=\"active current\"\n          [routerLinkActiveOptions]=\"{ exact: true }\">\n            <a \n              routerLink=\"/\">Главная</a>\n        </li>\n        <li routerLinkActive=\"active current\"><a routerLink=\"/portfolio\">Портфолио</a></li>\n        <li routerLinkActive=\"active current\"><a routerLink=\"/services\">Услуги</a></li>\n      </ul>\n\n    <a id=\"logo-container\" routerLink=\"/\" class=\"brand-logo\">Alina Logvinova</a>\n\n    <ul class=\"right hide-on-med-and-down\">\n      <li routerLinkActive=\"active current\"><a routerLink=\"/inspire\">Вдохновение</a></li>\n      <li routerLinkActive=\"active current\"><a routerLink=\"/about\">Обо мне</a></li>\n      <li routerLinkActive=\"active current\"><a routerLink=\"/contacts\">Контакты</a></li>\n    </ul>\n\n    <ul id=\"nav-mobile\" class=\"side-nav\">\n      <li><a routerLink=\"/\">Home</a></li>\n      <li><a routerLink=\"/portfolio\">Portfolio</a></li>\n      <li><a routerLink=\"/about\">About me</a></li>\n    </ul>\n    <a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.css")]
    })
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/rescent-instagram/rescent-instagram.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rescent-instagram/rescent-instagram.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"center-align\"> Recent posts from Instagram</h3>\n<div id=\"instafeed\"></div>"

/***/ }),

/***/ "../../../../../src/app/rescent-instagram/rescent-instagram.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RescentInstagramComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RescentInstagramComponent = (function () {
    function RescentInstagramComponent() {
    }
    RescentInstagramComponent.prototype.ngOnInit = function () {
    };
    return RescentInstagramComponent;
}());
RescentInstagramComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rescent-instagram',
        template: __webpack_require__("../../../../../src/app/rescent-instagram/rescent-instagram.component.html"),
        styles: [__webpack_require__("../../../../../src/app/rescent-instagram/rescent-instagram.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RescentInstagramComponent);

//# sourceMappingURL=rescent-instagram.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth0_variables__ = __webpack_require__("../../../../../src/app/services/auth0-variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__("../../../../auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js__["WebAuth"]({
            clientID: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].clientID,
            domain: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].domain,
            responseType: 'token id_token',
            audience: "https://" + __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].domain + "/userinfo",
            redirectUri: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].callbackURL,
            scope: 'openid'
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                _this.router.navigate(['/home']);
            }
            else if (err) {
                _this.router.navigate(['/home']);
                console.log(err);
                alert("Error: " + err.error + ". Check the console for further details.");
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth0-variables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_CONFIG; });
var AUTH_CONFIG = {
    clientID: 'SXK51TGKSgQdJUckqk7PqPuXsFMST0jI',
    domain: 'zames.eu.auth0.com',
    callbackURL: 'http://localhost:3000/'
};
//# sourceMappingURL=auth0-variables.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(_url, _http) {
        this._url = _url;
        this._http = _http;
        this.param = '';
    }
    DataService.prototype.getAll = function (param) {
        var _this = this;
        if (param != undefined) {
            return this._http.get(this._url + '/' + param)
                .map(function (result) { return _this.result = result.json().data; });
        }
        else {
            return this._http.get(this._url)
                .map(function (result) { return _this.result = result.json().data; });
        }
    };
    DataService.prototype.create = function (resourse) {
        var _this = this;
        return this._http.post(this._url, resourse)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.delete = function (id, param) {
        return this._http.put(this._url + "/" + id, { "param": param });
    };
    DataService.prototype.update = function (id, newdata) {
        return this._http.patch(this._url + "/" + id, newdata);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [String, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/implementjs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImplementjsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImplementjsService = (function () {
    function ImplementjsService() {
    }
    ImplementjsService.prototype.runSwiper = function () {
        return swiperLoad();
    };
    ImplementjsService.prototype.runMaterialize = function () {
        return initMaterialize();
    };
    ImplementjsService.prototype.runMaterializeModal = function () {
        return initMaterializeModal();
    };
    return ImplementjsService;
}());
ImplementjsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ImplementjsService);

//# sourceMappingURL=implementjs.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/photos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhotosService = (function (_super) {
    __extends(PhotosService, _super);
    function PhotosService(_http) {
        return _super.call(this, "/api/photos", _http) || this;
    }
    return PhotosService;
}(__WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]));
PhotosService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PhotosService);

var _a;
//# sourceMappingURL=photos.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/tasks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TasksService = (function (_super) {
    __extends(TasksService, _super);
    function TasksService(_http) {
        return _super.call(this, "/api/tasks", _http) || this;
    }
    return TasksService;
}(__WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]));
TasksService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TasksService);

var _a;
//# sourceMappingURL=tasks.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadService = (function (_super) {
    __extends(UploadService, _super);
    function UploadService(_http) {
        return _super.call(this, "/albums", _http) || this;
    }
    return UploadService;
}(__WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]));
UploadService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UploadService);

var _a;
//# sourceMappingURL=upload.service.js.map

/***/ }),

/***/ "../../../../../src/app/social-links/social-links.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/social-links/social-links.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  social-links works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/social-links/social-links.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialLinksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialLinksComponent = (function () {
    function SocialLinksComponent() {
    }
    SocialLinksComponent.prototype.ngOnInit = function () {
    };
    return SocialLinksComponent;
}());
SocialLinksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-social-links',
        template: __webpack_require__("../../../../../src/app/social-links/social-links.component.html"),
        styles: [__webpack_require__("../../../../../src/app/social-links/social-links.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SocialLinksComponent);

//# sourceMappingURL=social-links.component.js.map

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-drop-zone { border: dotted 3px lightgray; }\n.nv-file-over { border: dotted 3px red; } /* Default class applied to drop zones on over */\n.another-file-over-class { border: dotted 3px green; }\n\nhtml, body { height: 100%; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <form id=\"uploadForm\" enctype=\"multipart/form-data\" method=\"post\">\n    <input type=\"file\" name=\"userFile\" />\n    <input type=\"submit\" value=\"Upload File\" name=\"submit\">\n</form> -->\n\n\n  <div class=\"row\">\n      <div class=\"col-md-3\">\n        <h3>Выберите файлы</h3>\n        <div ng2FileDrop\n          [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n          (fileOver)=\"fileOverBase($event)\"\n          [uploader]=\"uploader\"\n          class=\"well my-drop-zone\">\n          Перетяните фотографии в эту зону\n        </div>\n        Или нажмите на кнопку\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\n    </div>\n\n    <div class=\"col-md-9\" style=\"margin-bottom: 40px\">\n\n        <h3>Очередь загрузки</h3>\n        <p>Количество фотографий: {{ uploader?.queue?.length }}</p>\n\n        <table class=\"table\">\n            <thead>\n            <tr>\n                <th width=\"50%\">Имя</th>\n                <th>Размер</th>\n                <th>Состояние</th>\n                <th>Статус</th>\n                <th>Действия</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let item of uploader.queue\">\n                <td><strong>{{ item?.file?.name }}</strong></td>\n                <td nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                <td>\n                    <div class=\"progress\" style=\"margin-bottom: 0;\">\n                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                    </div>\n                </td>\n                <td class=\"text-center\">\n                    <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n                    <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n                    <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n                </td>\n                <td nowrap>\n                    <button type=\"button\" class=\"btn btn-success btn-xs\"\n                            (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                        <span class=\"glyphicon glyphicon-upload\"></span> Загрузить\n                    </button>\n                    <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                            (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                        <span class=\"glyphicon glyphicon-ban-circle\"></span> Отменить\n                    </button>\n                    <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                            (click)=\"item.remove()\">\n                        <span class=\"glyphicon glyphicon-trash\"></span> Удалить\n                    </button>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n\n        <div>\n            <div>\n                Загружено:\n                <div class=\"progress\" style=\"\">\n                    <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                </div>\n            </div>\n            <button type=\"button\" class=\"btn btn-success btn-s\"\n                    (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                <span class=\"glyphicon glyphicon-upload\"></span> Загрузить все\n            </button>\n            <button type=\"button\" class=\"btn btn-warning btn-s\"\n                    (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                <span class=\"glyphicon glyphicon-ban-circle\"></span> Отменить все\n            </button>\n            <button type=\"button\" class=\"btn btn-danger btn-s\"\n                    (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                <span class=\"glyphicon glyphicon-trash\"></span> Удалить все\n            </button>\n        </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// const URL = '/api/';
var newURL = '/api/photos/new';
var UploadComponent = (function () {
    function UploadComponent() {
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: newURL, itemAlias: 'photo' });
        this.hasBaseDropZoneOver = false;
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    return UploadComponent;
}());
UploadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-upload',
        template: __webpack_require__("../../../../../src/app/upload/upload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/upload/upload.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UploadComponent);

//# sourceMappingURL=upload.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map