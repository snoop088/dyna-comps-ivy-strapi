import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynCompHolderComponent } from './dyn-comp-holder/dyn-comp-holder.component';
import { DynNormalCompTypeComponent } from './dyn-normal-comp-type/dyn-normal-comp-type.component';
import { CarouselModule } from './carousel/carousel.module';



@NgModule({
  declarations: [DynCompHolderComponent, DynNormalCompTypeComponent],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    DynCompHolderComponent
  ]
})
export class DynaCompsModule { }
