import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
  gotoTop() {
    (document.getElementById('top3') as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  constructor() { }

  ngOnInit(): void {
  }

}
