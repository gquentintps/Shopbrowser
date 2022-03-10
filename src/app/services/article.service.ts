import { Injectable }  from '@angular/core';
import {Article} from '../models/article.models';
@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  articles: Article[] = [
    {
      title: "AIR JORDAN 1",
      photoUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Black-White-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606318078",
      price: 109.95,
      stockRemaining: 3,
      description: "Baskets basses",
      enSolde: false
    },
    {
      title: "Pull vert",
      photoUrl: "https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/mode/pulls-gilets/pull-femme/pull-femme-cos/93938085-1-fre-FR/Pull-femme-Cos.jpg",
      price: 18.95,
      stockRemaining: 10,
      description: "",
      enSolde: false
    },
    {
      title: "Jean regular C5",
      photoUrl: "https://www.celio.com/medias/sys_master/productMediasImport/productMediasImport/h6e/h84/9723833614366/product-media-import-1002466-1-product.jpg?frz-v=2526",
      price: 45.95,
      stockRemaining: 6,
      description: "3 longueurs disponibles",
      enSolde: false
    },
    {
      title: "AIR JORDAN 1",
      photoUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Black-White-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606318078",
      price: 109.95,
      stockRemaining: 3,
      description: "Baskets basses",
      enSolde: false
    },
    {
      title: "Pull vert",
      photoUrl: "https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/mode/pulls-gilets/pull-femme/pull-femme-cos/93938085-1-fre-FR/Pull-femme-Cos.jpg",
      price: 18.95,
      stockRemaining: 10,
      description: "",
      enSolde: false
    },
    {
      title: "Jean regular C5",
      photoUrl: "https://www.celio.com/medias/sys_master/productMediasImport/productMediasImport/h6e/h84/9723833614366/product-media-import-1002466-1-product.jpg?frz-v=2526",
      price: 45.95,
      stockRemaining: 6,
      description: "3 longueurs disponibles",
      enSolde: false
    }


  ]


  getAllArticles(): Article[] {
    return this.articles;
}
}
