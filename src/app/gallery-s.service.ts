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
      imagetag:'umbrellaaa , rain , girl',
      imageADatail:'',
      likes:0


    },
    {
      id:'img2',
      imageUrl :'https://cdn.pixabay.com/photo/2020/01/17/16/01/tree-4773295_960_720.jpg',
      imagetag:'tree , green, leaves',
      imageADatail:'',
      likes:0


    },
    {
      id:'img3',
      imageUrl :'https://cdn.pixabay.com/photo/2020/03/15/13/19/cambodia-4933604_960_720.jpg',
      imagetag:'farming , rain , girl',
      imageADatail:'',
      likes:0,

    },
    {
      id:'img4',
      imageUrl :'https://cdn.pixabay.com/photo/2020/04/24/08/57/street-5085971_960_720.jpg',
      imagetag:'umbrellaaa , rain , girl',
      likes:0,
      imageADatail:''


    },
    {
      id:'img5',
      imageUrl :'https://cdn.pixabay.com/photo/2020/02/13/10/29/bees-4845211__340.jpg',
      imagetag:'tree , rain , girl',
      likes:0,
      imageADatail:''


    },
    {
      id:'img6',
      imageUrl :'https://cdn.pixabay.com/photo/2020/03/11/01/53/landscape-4920705__340.jpg',
      imagetag:'farming,  rain , girl',
      likes:0,
      imageADatail:''


    },
    {
      id:'img7',
      imageUrl :'https://cdn.pixabay.com/photo/2020/03/15/13/19/cambodia-4933604_960_720.jpg',
      imagetag:'umbrellaaa, rain , girl',
      likes:0,
      imageADatail:''


    },
    {
      id:'img8',
      imageUrl :'https://images.pexels.com/photos/237018/pexels-photo-237018.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      imagetag:'tree',
      likes:0,
      imageADatail:''


    },
    {
      id:'img9',
      imageUrl :'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      imagetag:'farming',
      likes:0,
      imageADatail:''


    },
    {
      id:'img10',
      imageUrl :'https://cdn.pixabay.com/photo/2020/03/15/13/19/cambodia-4933604_960_720.jpg',
      imagetag:'farming',
      likes:0,
      imageADatail:''


    },
    {
      id:'img11',
      imageUrl :'https://cdn.pixabay.com/photo/2020/01/31/07/26/shibuya-4807314_960_720.jpg',
      imagetag:'umbrellaaa',
      likes:0,
      imageADatail:''


    },
    {
      id:'img12',
      imageUrl :'https://cdn.pixabay.com/photo/2016/01/08/11/57/butterfly-1127666__340.jpg',
      imagetag:'tree',
      likes:0,
      imageADatail:''


    },
    {
      id:'img13',
      imageUrl :'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg',
      imagetag:'farming',
      likes:0,
      imageADatail:''


    },
    {
      id:'img14',
      imageUrl :'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539__340.jpg',
      imagetag:'tree',
      likes:0,
      imageADatail:''


    },
    {
      id:'img15',
      imageUrl :'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg',
      imagetag:'farming',
      likes:0,
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
