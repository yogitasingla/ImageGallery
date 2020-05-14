import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import{AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection} from 'angularfire2/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadIMageComponent implements OnInit {
   imageUrl;
   imageDetail;
   imageTag;
   id;



   imageCol:AngularFirestoreCollection<any>;
   images:any;

  constructor(private db:AngularFirestore) { }

  ngOnInit(): void {
    this.imageCol=this.db.collection('/images');
    this.images=this.imageCol.valueChanges();
  }
  submit(){
    let imageData={
      imageUrl:this.imageUrl,
   imageDetail:this.imageDetail,
   imageTag:this.imageTag,


    }
    this.db.collection('images').add(imageData);

  }

}
