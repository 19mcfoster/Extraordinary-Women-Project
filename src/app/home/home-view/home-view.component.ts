import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AppModule } from 'src/app/app.module';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})

export class HomeViewComponent{

  IntersectionObserver: HTMLScriptElement;
  constructor(private http: HttpClient, private postService: PostService){
    this.loadPosts();    
    //this.IntersectionObserver = document.createElement("script");
    //this.IntersectionObserver.src = "../../../assets/intersection-oberserver.js";
    //document.appendChild(this.IntersectionObserver);

  }

  loadPosts(){
    this.postService.onLoadService().subscribe
    (data => {
      if(!Array.isArray(data)){
        console.log("Data Retrieval Failed")
      } else {
        var elem;
        for (let i = 0; i < data.length; i++){
          elem = document.createElement("main");
          elem.id = ("" + data[i][0]);
          elem.className = "fade-in from-bottom"
          // elem.innerText = "id: " + data[i][0] 
          //                + " Name: " + data[i][1]
          //                + " Textbox: " + data[i][2]
          //                + " Email: " + data[i][3]
          //                + " Image Name: " + data[i][4]
          //                + " Image URL: " + data[i][5];
          if(i%2 == 0 ){
          elem.innerHTML = "<section class = &quot;post fade-in from-bottom&quot;>" + 
                          "<h3 style= 'font-size: xx-large; font-weight: 600;'>" + data[i][1] + "</h3>" + 
                          "<div class= 'post-box'>" + 
                          "<div class='post-image-box'>" + 
                          "<img src='" + data[i][5] + "' alt='" + data[i][4] +  "'>" + 
                          "</div><div class= 'post-text-box'>" + 
                          "<h3>" + data[i][2] + "</h3></div>" + 
                          "</div></section>"
          } else {
            elem.innerHTML = "<div class='desktop-display'>" + 
                          "<section class = &quot;post fade-in from-bottom&quot;>" + 
                          "<h3 style= 'font-size: xx-large; font-weight: 600;'>" + data[i][1] + "</h3>" + 
                          "<div class= 'post-box'>" + 
                          "<div class= 'post-text-box'>" + 
                          "<h3>" + data[i][2] + "</h3></div>" + 
                          "<div class='post-image-box'>" + 
                          "<img src='" + data[i][5] + "' alt='" + data[i][4] +  "'>" + 
                          "</div>" +
                          "</div></section>" + 
                          "</div>" + 

                          "<div class='mobile-display'>" +
                          "<section class = &quot;post fade-in from-bottom&quot;>" + 
                          "<h3 style= 'font-size: xx-large; font-weight: 600;'>" + data[i][1] + "</h3>" + 
                          "<div class= 'post-box'>" + 
                          "<div class='post-image-box'>" + 
                          "<img src='" + data[i][5] + "' alt='" + data[i][4] +  "'>" + 
                          "</div><div class= 'post-text-box'>" + 
                          "<h3>" + data[i][2] + "</h3></div>" + 
                          "</div></section>" +
                          "</div>"
          }
          document.body.firstElementChild.appendChild(elem);
        }
        elem = document.createElement("div");
        elem.className = 'spacer';
        document.body.firstElementChild.appendChild(elem);


        const faders = document.querySelectorAll(".fade-in");
        const fade_options = { threshold: 0.25 };
    
        const observer_fade = new IntersectionObserver(function (
          entries,
          observer_fade
        ) {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            } else {
              entry.target.classList.add("appear");
              observer_fade.unobserve(entry.target);
            }
          });
        },
        fade_options);
    
        faders.forEach((fader) => {
          observer_fade.observe(fader);
        });

        
      }
    })
  }
}
