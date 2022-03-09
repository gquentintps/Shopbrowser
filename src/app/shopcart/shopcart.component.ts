import {Component, OnInit} from '@angular/core';
import {Shopcart} from "../models/shopcart.models";
import {ShopcartService} from "../services/shopcart.service";
import {Article} from "../models/article.models";
import {WalletService} from "../services/wallet.service";

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.scss']
})
export class ShopcartComponent implements OnInit {
  shopcart!: Shopcart;

  constructor(private shopcartService: ShopcartService,
              private walletService: WalletService) { }

  ngOnInit(): void {
    this.shopcart = this.shopcartService.getShopcart();
  }

  onDelete(article: Article): void {
    const index: number = this.shopcart.articlesArray.indexOf(article);
    if (index !== -1) this.shopcart.articlesArray.splice(index, 1);
    article.stockRemaining++;
    this.shopcartService.updateShopcart();
  }

  onEmptyShopcart(): void {
    while (this.shopcart.articlesArray[0]) {
      this.onDelete(this.shopcart.articlesArray[0]);
    }
  }
}
