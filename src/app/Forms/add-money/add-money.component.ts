import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Wallet} from "../../models/wallet.models";
import {WalletService} from "../../services/wallet.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.scss']
})
export class AddMoneyComponent implements OnInit {
  moneyField = new FormControl('');
  wallet!: Wallet;

  constructor(private walletService: WalletService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.wallet = this.walletService.getWallet();
  }

  onAddMoney() {
    if (isNaN(this.moneyField.value) || this.moneyField.value < 0) {
      window.alert('Only positive numbers');
      this.moneyField.reset();
      return;
    }
    this.wallet.money+= +this.moneyField.value;
    this.moneyField.reset();
  }

  goBack(): void {
    this.router.navigateByUrl('');
  }

  goShopcart(): void {
    this.router.navigateByUrl('buy');
  }

}











