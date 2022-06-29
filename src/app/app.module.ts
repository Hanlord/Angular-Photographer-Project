import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FootComponent } from './foot/foot.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ReviewComponent } from './review/review.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AwardsComponent } from './awards/awards.component';
import { GalleryTeaserComponent } from './gallery-teaser/gallery-teaser.component';
import {  RouterModule } from "@angular/router";
import { ArticleHomepageComponent } from './article-homepage/article-homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ContactComponent,
    HomeComponent,
    FootComponent,
    GalleryComponent,
    AboutComponent,
    ReviewComponent,
    AwardsComponent,
    GalleryTeaserComponent,
    ArticleHomepageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
