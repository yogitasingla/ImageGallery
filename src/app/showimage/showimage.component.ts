import { GalleryComponent } from './../gallery/gallery.component';
import { GallerySService } from './../gallery-s.service';
import { imageDetail } from './../gallery/gallery.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-showimage',
  templateUrl: './showimage.component.html',
  styleUrls: ['./showimage.component.css']
})
export class ShowimageComponent implements OnInit {

  imageDetails: imageDetail[];
  loadImage : imageDetail

  constructor(private activatedRoute:ActivatedRoute,
    private gallerySService:GallerySService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId =>{
      const showid = paramsId['Imid'];
      this.loadImage = this.gallerySService.getImage(showid);
    })
  }

}
