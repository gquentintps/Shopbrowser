import { Injectable }  from '@angular/core';
import {Shopcart} from "../models/shopcart.models";

@Injectable({
  providedIn: 'root'
})

export class ShopcartService {
  shopcart: Shopcart = {
    totalAmount: 0,
    nbrArticles: 0,
    articlesArray: []
  }

  getShopcart(): Shopcart {
    return this.shopcart;
  }

  updateShopcart(): void {
    this.shopcart.totalAmount = 0;
    this.shopcart.nbrArticles = 0;
    for (let article of this.shopcart.articlesArray) {
      this.shopcart.nbrArticles++;
      this.shopcart.totalAmount += article.price;
    }
  }
}
