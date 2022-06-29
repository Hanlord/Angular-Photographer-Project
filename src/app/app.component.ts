import { Component,OnInit} from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router } from "@angular/router";
import { debounceTime, fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Photography-App';

  showBtn$ = fromEvent(document, 'scroll').pipe(
    debounceTime(50),
    map(() => window.scrollY > 500),
    tap(() => console.log('sas'))
  );
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

constructor(public scroller: ViewportScroller, private router: Router) {}
  ngOnInit() {
    
  }


jump() {
    this.scroller.scrollToAnchor("wedding");
}

jump2() {
  this.scroller.scrollToAnchor("culinary");
}

jump3() {
  this.scroller.scrollToAnchor("portraits");
}
}