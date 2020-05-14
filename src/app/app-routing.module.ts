import { ImageListComponent } from './images/image-list/image-list.component';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';

import { UploadIMageComponent } from './upload-image/upload-image.component';
import { YogiComponent } from './yogi/yogi.component';
import { UploadComponent } from './upload/upload.component';
import { ShowimageComponent } from './showimage/showimage.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DocAppointmentComponent } from './doc-appointment/doc-appointment.component';
import { HomeComponent } from './home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'image/upload', pathMatch: 'full' },
  {path:'image',component:ImagesComponent, children:[
    {
     path:'upload',component:ImageComponent
    },
    {
      path:'list',component:ImageListComponent
    }
  ]},
  { path: "login", component: LoginComponent },
  {path:"registration",component:RegistrationComponent},
  {path:'main-nav',component:MainNavComponent},
  {path:'home',component:HomeComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'upload',component:UploadComponent},
  {path:'image/:Imid',component:ShowimageComponent},
  {path:'uploadImage',component:UploadIMageComponent},
  {path:'yogi',component:YogiComponent},
  {path:'appointment',component:DocAppointmentComponent},
  { path: '**', redirectTo: 'image/upload', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
