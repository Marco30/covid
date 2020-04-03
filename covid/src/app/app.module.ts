import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { MainViewModule } from './main-view/main-view.module';

@NgModule({
  declarations: [
    AppComponent,
    // MainViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
