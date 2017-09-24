import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product, ProductService,Comment } from "../shared/product.service";
import { WebSocketService } from "../shared/web-socket.service";
import { Subscription } from "rxjs/Rx";
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
isWatched:boolean=false;
currentBid:number;
subscription:Subscription;
  constructor(private routeIngo: ActivatedRoute,
  private productService:ProductService,
  private wsService:WebSocketService
) { }
  ngOnInit() {

  let productId:number=this.routeIngo.snapshot.params["productId"];
 this.productService.getProduct(productId).subscribe(
product=>{
  this.product=product;
  this.currentBid=product.price;
}
);
// 自定义订阅
this.productService.getCommentsForProductId(productId).subscribe(
     comments=>this.comments=comments
)
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

  watchProduct(){
if (this.subscription) {
  this.subscription.unsubscribe();
  this.isWatched=false;
  this.subscription=null;
} else {
  
  this.isWatched=!this.isWatched;
  this.wsService.createObservableSocket("ws://localhost:8000",this.product.id)
  .subscribe(
   products=>{
     let product = products.find(p=>p.productId===this.product.id)
     this.currentBid=product.bid;
   }

  );
}
  }
}
