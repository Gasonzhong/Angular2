import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product, ProductService,Comment } from "../shared/product.service";
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product:Product;
comments:Comment[];
newRating:number=5;
newComment:string="";
isCommentHidden=true;
  constructor(private routeIngo: ActivatedRoute,
  private productService:ProductService) { }
  ngOnInit() {

    let productId:number=this.routeIngo.snapshot.params["productId"];
    this.product=this.productService.getProduct(productId);
     this.comments=this.productService.getCommentsForProductId(productId);
  }

  addComment(){
    console.log(this.newComment)
    let comment=new Comment(
    0,this.product.id,new Date().toISOString(),"someone",this.newRating,this.newComment);
    this.reCountStars();
    this.comments.unshift(comment);
this.resetComment();

  }

  resetComment(){
    this.newComment=null;
    this.newRating=5;
    this.isCommentHidden=true;
  }

  reCountStars(){
    //reduce函数，这个方法相当于 sum=sum+comment.rating
    let sum=this.comments.reduce((sum,comment)=>sum+comment.rating,0);
   this.product.rating=sum/this.comments.length;
  }
}
