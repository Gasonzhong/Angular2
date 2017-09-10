import { Component, OnInit } from '@angular/core';
import { ProductService } from "../shared/product.service";
import { FormControl } from "@angular/forms";
import'rxjs/Rx'
import { Observable } from "rxjs/Rx";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

private  products: Observable<Product[]>;
private  imgUrl = 'http://placehold.it/320x150';
private keyWord:string;
private titleFilter:FormControl=new FormControl();
  constructor(private productService:ProductService) {
    this.titleFilter.valueChanges
    .debounceTime(500)
    .subscribe(
value=>this.keyWord=value
    );
   }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {}
}
