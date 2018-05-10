import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimalesComponent } from './animales/animales.component';
import { ReptilesComponent } from './reptiles/reptiles.component';
import { HongosComponent } from './hongos/hongos.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalesComponent,
    ReptilesComponent,
    HongosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
