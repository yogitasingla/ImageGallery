import { imageDetail } from './gallery.model';
import { Component, OnInit } from '@angular/core';
import { GallerySService } from './../gallery-s.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  imageDetails:imageDetail[];
  like=0;

  constructor(private GallerySService:GallerySService) { }



  ngOnInit() {
    this.imageDetails= this.GallerySService.getAllImages();
    console.log('this.like');

  }
  onlike(){
  this.like=this.like+1;
  }


}
