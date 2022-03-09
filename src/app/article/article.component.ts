import {Component, OnInit, Input} from '@angular/core';
import {Article} from '../models/article.models';
import {ShopcartService} from "../services/shopcart.service";
import {WalletService} from "../services/wallet.service";


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements  OnInit {
  @Input() article!: Article;


  constructor(private shopcartService: ShopcartService,
              private walletService: WalletService) {
  }
  ngOnInit() {

  }

  onAddToShopCart(article: Article): void {
    if (article.stockRemaining > 0 ) {
      this.shopcartService.shopcart.articlesArray.push(article);
      article.stockRemaining--;
      this.shopcartService.updateShopcart();
    }
  }
}



