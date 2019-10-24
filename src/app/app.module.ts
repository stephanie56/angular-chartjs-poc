import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StackedBarComponent } from './stacked-bar/stacked-bar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, StackedBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
