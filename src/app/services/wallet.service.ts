import { Injectable }  from '@angular/core';
import {Wallet} from "../models/wallet.models";

@Injectable({
  providedIn: 'root'
})

export class WalletService {
  wallet: Wallet = {
    userName: 'UserTest',
    money: 200
  }

  getWallet(): Wallet {
    return this.wallet;
  }
}
