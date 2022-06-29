import { Component, OnInit } from '@angular/core';
import { Landscape, Portraits } from '../photos';
import { Wedding } from '../photos';
import { Food } from '../photos';
import { Ilandscape, Iportraits } from '../Iphotos';
import { Iwedding } from '../Iphotos';
import { Ifood } from '../Iphotos';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  portraits: Iportraits[] = Portraits;
  portrait: any;

  weddings: Iwedding[] = Wedding;
  wedding: any;

  foods: Ifood[] = Food;
  food: any;

  landscapes: Ilandscape[] = Landscape;
  landscape: any;

  constructor(private route: ActivatedRoute, public scroller: ViewportScroller,private router: Router) {
    console.log(window.pageYOffset);
    
  }
  gotoTop() {
    (document.getElementById('top3') as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
jump() {
  (document.getElementById('wedding') as HTMLElement).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });
}

jump2() {
  
  (document.getElementById('culinary') as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
}

jump3() {
  (document.getElementById('portraits') as HTMLElement).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });
}
  ngOnInit(): void {
    this.router.navigate(["/gallery"]);

    // this.route.paramMap.subscribe((params) => {
    //   let id: any = params.get('photoId');
    //   this.portrait = Portraits[id];
      
    // });

    // this.route.paramMap.subscribe((params) => {
    //   let id: any = params.get('photoId');
    //   this.wedding = Wedding[id];
    // });

    // this.route.paramMap.subscribe((params) => {
    //   let id: any = params.get('photoId');
    //   this.food = Food[id];
    // });

    // this.route.paramMap.subscribe((params) => {
    //   let id: any = params.get('photoId');
    //   this.landscape = Landscape[id];
    // });
    
    
  }
}

