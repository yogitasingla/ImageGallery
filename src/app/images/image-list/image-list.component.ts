import { ImageService } from './../../shared/image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  constructor(private service:ImageService) { }

  ngOnInit(): void {
    this.service.getImageDetailList();
  }

}
