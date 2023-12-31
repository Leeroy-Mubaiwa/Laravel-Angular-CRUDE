import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import http client module
import { HttpClientModule } from '@angular/common/http';
import { ArticlesComponent } from './articles/articles.component';
import { NewArticleComponent } from './new-article/new-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    NewArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //add http client module
    ,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
