import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { PostService } from 'src/app/post.service';


@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class PostViewComponent {
  post = new FormGroup({
    name: new FormControl('',Validators.required),
    textbox: new FormControl('',Validators.required),
    image: new FormControl('', Validators.required),
    tos: new FormControl('',Validators.requiredTrue),
    email: new FormControl('')
  })
  clicked = false;
  selectedFile: File = null;

  constructor(private http: HttpClient, private postService: PostService) {}

  onFileSelected(event: any){
    console.log("File Selected");
    this.selectedFile = event.target.files[0];
  }

  onSubmit(){
    this.clicked = true;
    const fd = new FormData;
    
    fd.append('name', this.post.value.name);
    fd.append('textbox', this.post.value.textbox);
    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('email', this.post.value.email);    

    const inTolerant = [
      // I never want to write this again
      "shit",
      "fuck",
      "bitch",
      "fag",
      "nigger",
      "nigga",
      "chink",
    ]; 
    var isIntolerant = false;
    inTolerant.some(word=>{
      if (this.post.value.textbox.toLowerCase().includes(word)){
        isIntolerant = true;
      } 
    })
    if (isIntolerant){
      alert("Post includes language that is against our community guidelines and cannot be shared. Please modify or contact us for help.");
      this.clicked = false;
      return;
    }
    alert("Your post is being proccessed. This may take a moment.")
    this.postService.onUploadService(fd).subscribe
    (res => {
      if (res.localeCompare("Saved") == 0){
        window.location.href = '/thanks'
      }
    },
    err=>{
      console.log(err);
      alert("Sorry! We are currently having some issues. Please try again later.");
      this.clicked = false;
    }
    )
  
  }
}
