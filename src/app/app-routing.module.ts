import { GalleryComponent } from './gallery/gallery.component';
import { DocAppointmentComponent } from './doc-appointment/doc-appointment.component';
import { HomeComponent } from './home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  {path:"registration",component:RegistrationComponent},
  {path:'main-nav',component:MainNavComponent},
  {path:'home',component:HomeComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'appointment',component:DocAppointmentComponent},
  { path: '**', redirectTo: 'home', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
