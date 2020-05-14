import { Component, OnInit } from '@angular/core';
import{AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  course:any[];
  constructor(db:AngularFireDatabase,) {
    db.list('/course').valueChanges().subscribe(course=>{
      this.course=course;
      console.log(course);
    });
   }

  ngOnInit(): void {
  }

}
