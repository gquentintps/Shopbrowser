import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { HeaderComponent } from './header/header.component';
import { ShopcartComponent } from './shopcart/shopcart.component';
import {AppRoutingModule} from "./app-routing.module";
import { BuyingPageComponent } from './buying-page/buying-page.component';
import { WalletComponent } from './wallet/wallet.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AddMoneyComponent } from './Forms/add-money/add-money.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleListComponent,
    HeaderComponent,
    ShopcartComponent,
    BuyingPageComponent,
    WalletComponent,
    AddMoneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

