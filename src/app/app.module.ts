import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from "@angular/forms";
import{ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RegistrationComponent } from './registration/registration.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import{ MatDividerModule}from '@angular/material/divider'
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import { DocAppointmentComponent } from './doc-appointment/doc-appointment.component';
import {MatRadioModule} from '@angular/material/radio';
import { GalleryComponent } from './gallery/gallery.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ShowimageComponent } from './showimage/showimage.component';
import { UploadComponent } from './upload/upload.component';
 import{AngularFireModule} from 'angularfire2';
 import{AngularFireStorageModule} from 'angularfire2/storage'
 import{AngularFireDatabaseModule} from 'angularfire2/database';
import { YogiComponent } from './yogi/yogi.component';
import{AngularFirestoreModule}from 'angularfire2/firestore';
import { UploadIMageComponent } from './upload-image/upload-image.component';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component'
//import{AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MainNavComponent,
    HomeComponent,
    DocAppointmentComponent,
    GalleryComponent,
    ShowimageComponent,
    UploadComponent,
    YogiComponent,
    UploadIMageComponent,
    ImagesComponent,
    ImageComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDividerModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatDatepickerModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    AppRoutingModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatRadioModule,
    MatNativeDateModule,
    MatGridListModule,
    MatDialogModule,
     AngularFireDatabaseModule,
     AngularFirestoreModule,
     AngularFireStorageModule,
     AngularFireModule.initializeApp(environment.firebase),

    // MDBBootstrapModulesPro.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
