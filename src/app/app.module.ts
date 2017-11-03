import { AuthService } from './services/auth.service';
import { PhotosService } from './services/photos.service';
import { UploadService } from './services/upload.service';
import { ImplementjsService } from './services/implementjs.service';
import { HomeComponent } from './home/home.component';
import { TasksService } from './services/tasks.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpModule, Http, RequestOptions } from '@angular/http';
// angular2-jwt config
// import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { DataService } from './services/data.service';
import { GalleryComponent } from './gallery/gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadComponent } from './upload/upload.component';
import { FileDropDirective, FileSelectDirective } from 'ng2-file-upload';
import { HeaderComponent } from './header/header.component';
import { AlbumsPreviewComponent } from './albums-preview/albums-preview.component';
import { AboutComponent } from './about/about.component';
import { AboutExamplesComponent } from './about-examples/about-examples.component';
import { RescentInstagramComponent } from './rescent-instagram/rescent-instagram.component';
import { FooterComponent } from './footer/footer.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogComponent } from './blog/blog.component';
import { AboutPhotographerComponent } from './about-photographer/about-photographer.component';
import { AlbumComponent } from './album/album.component';
import { LoginComponent } from './login/login.component';

// export function authHttpServiceFactory(http: Http, options: RequestOptions) {
//   return new AuthHttp(new AuthConfig(), http, options);
// }

@NgModule({
  declarations: [
    FileDropDirective, 
    FileSelectDirective,
    AppComponent,
    GalleryComponent,
    NavbarComponent,
    UploadComponent,
    HeaderComponent,
    AlbumsPreviewComponent,
    AboutComponent,
    AboutExamplesComponent,
    RescentInstagramComponent,
    FooterComponent,
    SocialLinksComponent,
    HomeComponent,
    ImageDetailComponent,
    NotFoundComponent,
    BlogComponent,
    AboutPhotographerComponent,
    AlbumComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'portfolio', component: GalleryComponent },
      { path: 'login', component: LoginComponent },
      { path: 'portfolio/:album', component: AlbumComponent },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
  providers: [
    DataService, 
    TasksService,
    ImplementjsService,
    UploadService,
    PhotosService,
    AuthService
    // {
    //   provide: AuthHttp,
    //   useFactory: authHttpServiceFactory,
    //   deps: [Http, RequestOptions]
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
