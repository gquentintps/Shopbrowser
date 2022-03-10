import { Injectable }  from '@angular/core';
import {Shopcart} from "../models/shopcart.models";

@Injectable({
  providedIn: 'root'
})

export class ShopcartService {
  shopcart: Shopcart = {
    articlesArray: []
  }

  getShopcart(): Shopcart {
    return this.shopcart;
  }

  getTotalAmount(): number {
    let totalAmount: number = 0;
    for (let article of this.shopcart.articlesArray)
      totalAmount+=article.price;
    return totalAmount;
  }


}
