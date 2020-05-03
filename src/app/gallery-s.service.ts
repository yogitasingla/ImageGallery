import { imageDetail } from './gallery/gallery.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GallerySService {

  private imageDetails : imageDetail[]=[
    {
      id:'img1',
      imageUrl :'https://cdn.pixabay.com/photo/2020/01/31/07/26/shibuya-4807314_960_720.jpg',
      imagetag:'umbrellaaa',
      imageADatail:''


    },
    {
      id:'img2',
      imageUrl :'https://cdn.pixabay.com/photo/2020/01/17/16/01/tree-4773295_960_720.jpg',
      imagetag:'tree',
      imageADatail:''


    },
    {
      id:'img3',
      imageUrl :'https://cdn.pixabay.com/photo/2020/03/15/13/19/cambodia-4933604_960_720.jpg',
      imagetag:'farming',
      imageADatail:''


    },
    {
      id:'img4',
      imageUrl :'https://cdn.pixabay.com/photo/2020/01/31/07/26/shibuya-4807314_960_720.jpg',
      imagetag:'umbrellaaa',
      imageADatail:''


    },
    {
      id:'img5',
      imageUrl :'https://cdn.pixabay.com/photo/2020/01/17/16/01/tree-4773295_960_720.jpg',
      imagetag:'tree',
      imageADatail:''


    },
    {
      id:'img6',
      imageUrl :'https://cdn.pixabay.com/photo/2020/03/15/13/19/cambodia-4933604_960_720.jpg',
      imagetag:'farming',
      imageADatail:''


    },
    {
      id:'img7',
      imageUrl :'https://cdn.pixabay.com/photo/2020/01/31/07/26/shibuya-4807314_960_720.jpg',
      imagetag:'umbrellaaa',
      imageADatail:''


    },
    {
      id:'img8',
      imageUrl :'https://cdn.pixabay.com/photo/2020/01/17/16/01/tree-4773295_960_720.jpg',
      imagetag:'tree',
      imageADatail:''


    },
    {
      id:'img9',
      imageUrl :'https://cdn.pixabay.com/photo/2020/03/15/13/19/cambodia-4933604_960_720.jpg',
      imagetag:'farming',
      imageADatail:''


    },
    {
      id:'img10',
      imageUrl :'https://cdn.pixabay.com/photo/2020/03/15/13/19/cambodia-4933604_960_720.jpg',
      imagetag:'farming',
      imageADatail:''


    },
    {
      id:'img11',
      imageUrl :'https://cdn.pixabay.com/photo/2020/01/31/07/26/shibuya-4807314_960_720.jpg',
      imagetag:'umbrellaaa',
      imageADatail:''


    },
    {
      id:'img12',
      imageUrl :'https://cdn.pixabay.com/photo/2020/01/17/16/01/tree-4773295_960_720.jpg',
      imagetag:'tree',
      imageADatail:''


    },
    {
      id:'img13',
      imageUrl :'https://cdn.pixabay.com/photo/2020/03/15/13/19/cambodia-4933604_960_720.jpg',
      imagetag:'farming',
      imageADatail:''


    }
  ]

  constructor() { }
  getAllImages(){
    return[...this.imageDetails]
  }
  getImage(imageDetailId:string){
    return{...this.imageDetails.find(iamgeDetail=>{
     return  iamgeDetail.id === imageDetailId
    }
    )}
}}
