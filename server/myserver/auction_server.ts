import * as express from 'express'
import {Server}  from 'ws'
const app=express();
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
  
app.get('/',(req,res)=>{
    res.send("Hello Express");
})

app.get('/api/products',(req,res)=>{
let result=products;
let params=req.query;
if(params.title){
  result=result.filter((p)=>p.title.indexOf(params.title)!==-1)
}

if(params.title){
  result=result.filter((p)=>p.title.indexOf(params.title)!==-1)
}
if(params.category!=="-1"&&result.length>0){
  result=result.filter((p)=>p.categories.indexOf(params.category)!==-1)
}

res.json(result);
})
app.get('/api/products/:id/comments',(req,res)=>{
    res.json(comments.filter((comments:Comment)=>comments.productId==req.params.id));
})

app.get('/api/products/:id',(req,res)=>{
  res.json(products.find((product)=>product.id==req.params.id));
})

const server=app.listen(8000,'localhost',()=>{
    console.log("服务器已启动，地址是：http://localhost:8000")
})
const products:Product[] = [
    new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品', ['电子产品', '硬件设备']),
      new Product(2, '第二个商品', 1.59, 3.5, '这是第二个商品', ['图书']),
        new Product(3, '第三个商品', 1.29, 1.5, '这是第三个商品', ["硬件设备"]),
          new Product(4, '第四个商品', 5.99, 3.5, '这是第四个商品', ['电子产品', '硬件设备']),
            new Product(5, '第五个商品', 6.99, 2.5, '这是第五个商品', ['电子产品']),
              new Product(6, '第六个商品', 2.99, 3.5, '这是第六个商品', ['图书']),
  ];
  
  const comments:Comment[]=[
    new Comment(1,1,"2017-02-02 22:22:32","张三",3,"东西不错"),
     new Comment(2,1,"2017-02-01 22:52:22","张四",2,"东西不错的地方分"),
      new Comment(3,1,"2017-03-02 12:22:22","张六",3,"东西放到不错地方"),
       new Comment(4,2,"2017-01-02 22:27:22","张三",3,"东西放到 不错"),

  ]
//websocket
const subscriptions=new Map<any,number[]>();
  const wsServer=new Server({port:8000});
  wsServer.on("connection",websocket=>{
      websocket.on('message',message=>{
        let messageobj:string=message as string;
       let messageObj=JSON.parse(messageobj);
       let productIds=subscriptions.get(websocket);
subscriptions.set(websocket,[...productIds,messageObj.productId])
      });
  });

  const currentBids=new Map<number,number>();
 setInterval(()=>{
 products.forEach(
   p=>{
     let currentBid=this.currentBids.get(p.id)||p.price;
     let newBid=currentBid+Math.random()*5;
     currentBid.set(p.id,newBid);
   }
 );
subscriptions.forEach((productIds:number[],ws)=>{
  if (ws.readyState===1) {
    
    let newBids=productIds.map(pid=>({
      
      productId:pid,
      bid:currentBids.get(pid)
    }));
    ws.send(JSON.stringify(newBids));
  } else {
    subscriptions.delete(ws)
  }
})
 },2000)
