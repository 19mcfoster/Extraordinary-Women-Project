import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostViewComponent } from './home/post-view/post-view.component';
import { ImageViewComponent } from './home/image-view/image-view.component';
import { AboutViewComponent } from './home/about-view/about-view.component';
import { HomeViewComponent } from './home/home-view/home-view.component';
import { ContactViewComponent } from './home/contact-view/contact-view.component';
import { TosComponent } from './home/tos/tos.component';
import { ThanksComponent } from './home/thanks/thanks.component';
import { DntComponent } from './home/dnt/dnt.component';
import { PrivacyComponent } from './home/privacy/privacy.component';

const routes: Routes = [
  {path: '', component:HomeViewComponent},
  {path: 'contact', component:ContactViewComponent},
  {path: 'about', component:AboutViewComponent},
  {path: 'post', component: PostViewComponent},
  {path: 'images', component: ImageViewComponent},
  {path: 'tos', component: TosComponent},
  {path: 'thanks', component: ThanksComponent},
  {path: 'dnt', component: DntComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'load.php', component: File},
  {path: 'insert.php', component: File}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
