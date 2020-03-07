import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DiscsListComponent } from './discs-list/discs-list.component';
import { DiscsDetailsComponent } from './discs-details/discs-details.component';

@NgModule({
  imports:     
  [ BrowserModule, 
  FormsModule,
  RouterModule.forRoot([
    { path: '', component: DiscsListComponent },
    { path: 'discs/:discsId', component: DiscsDetailsComponent },
    ])
  ],
  declarations: [ AppComponent, TopBarComponent, DiscsListComponent, DiscsDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }



  
  