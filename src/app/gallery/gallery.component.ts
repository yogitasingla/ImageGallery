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

  constructor(private GallerySService:GallerySService) { }



  ngOnInit() {
    this.imageDetails= this.GallerySService.getAllImages();
  }


}
