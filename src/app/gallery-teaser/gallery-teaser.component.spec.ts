import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTeaserComponent } from './gallery-teaser.component';

describe('GalleryTeaserComponent', () => {
  let component: GalleryTeaserComponent;
  let fixture: ComponentFixture<GalleryTeaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryTeaserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
