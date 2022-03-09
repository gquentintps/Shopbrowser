import { Component, OnInit } from '@angular/core';
import {Wallet} from "../models/wallet.models";
import {WalletService} from "../services/wallet.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  wallet!: Wallet;
  constructor(private walletService: WalletService,
              private router: Router) { }

  ngOnInit(): void {
    this.wallet = this.walletService.getWallet();
  }

  onAddMoney(): void {
    this.router.navigateByUrl('addmoney');
  }

}
