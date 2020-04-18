import { Component, OnInit, ChangeDetectionStrategy, HostListener } from '@angular/core';

@Component({
  selector: 'dyn-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {
  public numbers = ['1', '2', '3', '4'];

  public activeIndex = 0;

  @HostListener('document:keyup.ArrowLeft')
  public previous(): void {
    this.activeIndex--;

    if (this.activeIndex < 0) {
      this.activeIndex = this.numbers.length - 1;
    }
  }

  @HostListener('document:keyup.ArrowRight')
  public next(): void {
    this.activeIndex++;

    if (this.activeIndex > this.numbers.length - 1) {
      this.activeIndex = 0;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
}
