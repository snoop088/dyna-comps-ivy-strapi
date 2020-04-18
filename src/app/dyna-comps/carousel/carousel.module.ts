import { NgModule, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';



@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselComponent
  ]
})
export class CarouselModule {
  constructor(private resolver: ComponentFactoryResolver) {

  }
  public resolveCarouselComponentFactory(): ComponentFactory<CarouselComponent> {
    return this.resolver.resolveComponentFactory(CarouselComponent);
  }
}
