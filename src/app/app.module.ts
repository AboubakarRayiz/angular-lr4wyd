import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AfficheComponent } from './affiche/affiche.component';
import { ResourceComponent } from './resource/resource.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ResourceComponent, AfficheComponent,  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
