import { Component } from '@angular/core';
import { Cloudinary } from '@cloudinary/url-gen';
import { PostService } from './post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {  
  title = 'Extraordinary Women Project';
  IntersectionObserverHome: HTMLScriptElement;
  IntersectionObserverPost: HTMLScriptElement

  
  constructor(private postService : PostService){
    this.IntersectionObserverHome = document.createElement("script");
    this.IntersectionObserverHome.src = "assets/intersection-observer-home.js";
    this.IntersectionObserverHome.defer = true;
    document.body.appendChild(this.IntersectionObserverHome);

    //this.IntersectionObserverPost = document.createElement("script");
    //this.IntersectionObserverPost.src = "assets/intersection-observer-post.js";
    //this.IntersectionObserverPost.defer = true;
    //document.body.appendChild(this.IntersectionObserverPost);
  }
  ngOnInit(){
    const cld = new Cloudinary({cloud: {cloudName: 'dnamq1569'}});
  }

}
