import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Product } from 'src/app/api/product';
import { ProductService } from 'src/app/service/productservice';

@Component({
  selector: 'app-admin-bids',
  templateUrl: './admin-bids.component.html',
  styleUrls: ['./admin-bids.component.scss']
})
export class AdminBidsComponent implements OnInit {

  products: Product[];

  bids: number = 30;

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  sourceCities: any[];

  targetCities: any[];

  orderCities: any[];

  constructor(private productService: ProductService,
              private router: Router) {}

  ngOnInit() {
      this.productService.getProducts().then(data => this.products = data);
     console.log('Data: ', this.productService.getProductById(1000) ) ;

      this.sourceCities = [
          {name: 'San Francisco', code: 'SF'},
          {name: 'London', code: 'LDN'},
          {name: 'Paris', code: 'PRS'},
          {name: 'Istanbul', code: 'IST'},
          {name: 'Berlin', code: 'BRL'},
          {name: 'Barcelona', code: 'BRC'},
          {name: 'Rome', code: 'RM'}];
      this.targetCities = [];

      this.orderCities = [
          {name: 'San Francisco', code: 'SF'},
          {name: 'London', code: 'LDN'},
          {name: 'Paris', code: 'PRS'},
          {name: 'Istanbul', code: 'IST'},
          {name: 'Berlin', code: 'BRL'},
          {name: 'Barcelona', code: 'BRC'},
          {name: 'Rome', code: 'RM'}];

      this.sortOptions = [
          {label: 'Price High to Low', value: '!price'},
          {label: 'Price Low to High', value: 'price'}
      ];
  }

  onSortChange(event) {
      const value = event.value;

      if (value.indexOf('!') === 0) {
          this.sortOrder = -1;
          this.sortField = value.substring(1, value.length);
      } else {
          this.sortOrder = 1;
          this.sortField = value;
      }
  }

  onClickJob(id: any)
  {
      this.router.navigateByUrl('/admin-bid-detail/' + id);
      console.log('Clicked product id :', id);
  }
}
