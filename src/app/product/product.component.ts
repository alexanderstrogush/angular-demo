import { Component, OnInit } from '@angular/core';
import {Product} from '../_model/product-model';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../_service/product.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private productId: string;
  private product$: Observable<Product>;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');

    this.product$ = this.productService.getById(this.productId);
  }

}
