import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

      private products:Product[] = [
      new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品', ['电子商品', '硬件']),
        new Product(2, '第二个商品', 1.59, 3.5, '这是第二个商品', ['电子商品', '硬件']),
          new Product(3, '第三个商品', 1.29, 1.5, '这是第三个商品', ['电子商品', '硬件']),
            new Product(4, '第四个商品', 5.99, 3.5, '这是第四个商品', ['电子商品', '硬件']),
              new Product(5, '第五个商品', 6.99, 2.5, '这是第五个商品', ['电子商品', '硬件']),
                new Product(6, '第六个商品', 2.99, 3.5, '这是第六个商品', ['电子商品', '硬件']),
    ];
    private comments:Comment[]=[
      new Comment(1,1,"2017-02-02 22:22:32","张三",3,"东西不错"),
       new Comment(2,1,"2017-02-01 22:52:22","张四",2,"东西不错的地方分"),
        new Comment(3,1,"2017-03-02 12:22:22","张六",3,"东西放到不错地方"),
         new Comment(4,2,"2017-01-02 22:27:22","张三",3,"东西放到 不错"),

    ]
  constructor() { }

  getProducts():Product[]{
    return this.products;
  }
  getProduct(id:number):Product{
    return this.products.find((product)=>product.id==id);
  }

getCommentsForProductId(id:number):Comment[]{
  return this.comments.filter((comment:Comment)=>comment.productId==id)
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

export class Comment{
  constructor(
    public id:number,
    public productId:number,
    public  timestamp:string,
    public user:string,
    public rating:number,
    public content:string
  ){}
}
