import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostViewComponent } from './home/post-view/post-view.component';
import { ImageViewComponent } from './home/image-view/image-view.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TosComponent } from './home/tos/tos.component';
import { ThanksComponent } from './home/thanks/thanks.component';

import { PostService } from './post.service';
import { CloudinaryModule } from '@cloudinary/ng';
import { DntComponent } from './home/dnt/dnt.component';
import { PrivacyComponent } from './home/privacy/privacy.component';
import { HomeViewComponent } from './home/home-view/home-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageViewComponent,
    HomeViewComponent,
    TosComponent,
    ThanksComponent,
    DntComponent,
    PrivacyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CloudinaryModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
