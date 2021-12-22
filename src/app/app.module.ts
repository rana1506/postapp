import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import {FormsModule} from '@angular/forms'; 

import { AppComponent } from './app.component';
import { PostcreateComponent } from './post/postcreate/postcreate.component';
import { PostlistComponent } from './post/postlist/postlist.component';

@NgModule({
  declarations: [
    AppComponent,
    PostcreateComponent,
    PostlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
