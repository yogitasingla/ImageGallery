import { ImageService } from './../../shared/image.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from 'angularfire2/storage';
import{ finalize} from 'rxjs/operators'
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  imgSrc:string='/assets/img/clickImage.jpeg';
  selectedImage:any=null;
  isSubmitted:boolean=false;

  formTemplate = new FormGroup({
    caption:new FormControl('',Validators.required),
    category:new FormControl(''),
    imageUrl:new FormControl('',Validators.required),
  })

  constructor(private storage :AngularFireStorage,
    private service:ImageService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  showPreview(event:any){
    if(event.target.files && event.target.files[0]){
      const reader= new FileReader();
      reader.onload=(e:any)=>this.imgSrc=e.target.result;
      reader.readAsDataURL(event.target.files[0]);
       this.selectedImage=event.target.files[0];
      }
  else{
    this.imgSrc="/assets/img/clickImage.jpeg";
    this.selectedImage=null;
  }
  }

  onSubmit(formValue){
 this.isSubmitted=true;
 if(this.formTemplate.valid){
   var filePath=`${formValue.category}${this.selectedImage.name.split('-').slice(0, -1).join('-')}_${new Date().getTime()}`
  const fileRef = this.storage.ref(filePath)
   this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
   finalize(()=>{
     fileRef.getDownloadURL().subscribe((url)=>{
       formValue['imageUrl'].url;
    this.service.insertImageDetails(formValue);

       this.resetForm();
     })
   })
   ).subscribe();
  }


  }
 get  FormControls(){
    return this.formTemplate['controls'];
  }


   resetForm(){
     this.formTemplate.reset();
     this.formTemplate.setValue({
       caption:'',
       imageUrl:'',
       category:'',
     });
     this.imgSrc="/assets/img/clickImage.jpeg";
     this.isSubmitted=false;
     this.selectedImage=null;
   }
}
