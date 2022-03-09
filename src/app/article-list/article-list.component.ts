import { Component, OnInit } from '@angular/core';
import {Article} from "../models/article.models";
import {ArticleService} from "../services/article.service";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles!: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles = this.articleService.getAllArticles();
  }

}
