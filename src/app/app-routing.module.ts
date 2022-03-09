import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ArticleListComponent} from "./article-list/article-list.component";
import {BuyingPageComponent} from "./buying-page/buying-page.component";
import {AddMoneyComponent} from "./Forms/add-money/add-money.component";

const routes: Routes = [
  {path: '', component: ArticleListComponent},
  {path: 'buy', component: BuyingPageComponent},
  {path: 'addmoney', component: AddMoneyComponent}
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
