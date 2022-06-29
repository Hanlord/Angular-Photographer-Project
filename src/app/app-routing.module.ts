import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AwardsComponent } from './awards/awards.component';

const routes: Routes = [{
  path:"",component: HomeComponent,
},{
  path:"about", component: AboutComponent,
},{
  path:"gallery", component: GalleryComponent,
},{
  path:"contact", component: ContactComponent,
},
{
  path:"awards", component: AwardsComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
