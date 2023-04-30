import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
  // providers:[AlertifyService, ] // Böyle yapınca sadece bu class için oluşturulacak sepet mantığı, lokal olarak servis oluşacak.
  // Virgülle devam edebilirsin. Aynı zaman app.module içindeki providers'ta kayıtlı olmamalı.
})
export class ProductComponent {
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  title = 'Ürün Listesi';
  filterText = '';
  products: Product[];

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data
      });
    });
  }

  addToCart(product: Product) {
    // alert(`${product.name} sepete eklendi.\nÜcreti ${product.price}`);
    //alertify.success(`${product.name} Sepete eklendi!`);
    this.alertifyService.success(`${product.name} Sepete eklendi!`);
  }
}
