import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynaCompsModule } from './dyna-comps/dyna-comps.module';
import { HttpClientModule } from '@angular/common/http';
import { BoModule } from './bo/bo.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynaCompsModule,
    HttpClientModule,
    SharedModule,
    BoModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
