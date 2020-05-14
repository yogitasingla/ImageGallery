import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import{AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection} from 'angularfire2/firestore';

interface Post{
  title:string;
  content:string;
}

interface PostId extends Post{
  id:string;
}

@Component({
  selector: 'app-yogi',
  templateUrl: './yogi.component.html',
  styleUrls: ['./yogi.component.css']
})
export class YogiComponent implements OnInit {
  postCol:AngularFirestoreCollection<Post>;
  //posts:Observable<Post[]>;
  posts:any;

  title:string;
  content:string;

  postDoc:AngularFirestoreDocument<Post>;
  post:Observable<Post>

  constructor(private db:AngularFirestore) { }

  ngOnInit(): void {
    this.postCol=this.db.collection('/posts');
   // this.posts=this.postCol.valueChanges();
    this.posts=this.postCol.snapshotChanges()
    .pipe
    (map (actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as Post;
        const id =a.payload.doc.id;
        return{id,data};
      })
    }))


  }
  addpost(){
     let data={
      title:this.title,
      content:this.content
    }
    //for adding data with defalut id
  // this.db.collection('posts').add(data)
  //for adding data with custom id
  this.db.collection('posts').doc('cutom-id').set(data)
  }
  getpost(PostId){
   this.postDoc= this.db.doc('posts/'+PostId);
   this.post = this.postDoc.valueChanges()
  }
  deletePost(PostId){
   this.db.doc('posts/'+PostId).delete();
  }

}
