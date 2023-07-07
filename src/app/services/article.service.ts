import { Injectable } from '@angular/core';

//import http client module
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {


  url:string = "http://127.0.0.1:8000/";

  constructor( private http: HttpClient ) {

   }

   listArticles(){

    console.log("listArticles() called");
      return this.http.get<any>(this.url + "api/articles");
   }
}
