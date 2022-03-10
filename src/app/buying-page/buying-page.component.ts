import { Component, OnInit } from '@angular/core';
import {ShopcartService} from "../services/shopcart.service";
import {Shopcart} from "../models/shopcart.models";
import {Router} from "@angular/router";
import {WalletService} from "../services/wallet.service";
import {Wallet} from "../models/wallet.models";

@Component({
  selector: 'app-buying-page',
  templateUrl: './buying-page.component.html',
  styleUrls: ['./buying-page.component.scss']
})
export class BuyingPageComponent implements OnInit {
  shopcart!: Shopcart;
  wallet!: Wallet;

  constructor(public shopcartService: ShopcartService,
              private router: Router,
              private walletService: WalletService) { }

  ngOnInit(): void {
    this.shopcart = this.shopcartService.getShopcart();
    this.wallet = this.walletService.getWallet();
  }

  goBack(): void {
    this.router.navigateByUrl('')
  }

  onBuyShopcart(): void {
    if (this.wallet.money - this.shopcartService.getTotalAmount() >= 0) {
      this.wallet.money -= this.shopcartService.getTotalAmount();
      this.shopcart.articlesArray = [];
      this.goBack();
    }
    else window.alert('You don\'t have enough money');
  }
}
