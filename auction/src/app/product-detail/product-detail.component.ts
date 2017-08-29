import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
private productTitle:string;
  constructor(private routeIngo: ActivatedRoute) { }

  ngOnInit() {
    this.productTitle=this.routeIngo.snapshot.params["proTitle"];
  }

}
