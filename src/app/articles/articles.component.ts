import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit{

  constructor( private articleService: ArticleService ) { }

  articles:any = [];

  ngonInit(): void {}

  showArticles(){
      this.articleService.listArticles().subscribe(
       article=>{

        this.articles = article;
         console.log(article);
       }
      );
  }


}
