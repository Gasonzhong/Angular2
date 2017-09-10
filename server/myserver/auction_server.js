"use strict";
exports.__esModule = true;
var express = require("express");
var ws_1 = require("ws");
var app = express();
var Product = /** @class */ (function () {
    function Product(id, title, price, rating, desc, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Product;
}());
exports.Product = Product;
var Comment = /** @class */ (function () {
    function Comment(id, productId, timestamp, user, rating, content) {
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.content = content;
    }
    return Comment;
}());
exports.Comment = Comment;
app.get('/', function (req, res) {
    res.send("Hello Express");
});
app.get('/products', function (req, res) {
    res.json(products);
});
app.get('/products/:id/comments', function (req, res) {
    res.json(comments.filter(function (comments) { return comments.productId == req.params.id; }));
});
app.get('/products/:id', function (req, res) {
    res.json(products.find(function (product) { return product.id == req.params.id; }));
});
var server = app.listen(8000, 'localhost', function () {
    console.log("服务器已启动，地址是：http://localhost:8000");
});
var products = [
    new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品', ['电子产品', '硬件设备']),
    new Product(2, '第二个商品', 1.59, 3.5, '这是第二个商品', ['图书']),
    new Product(3, '第三个商品', 1.29, 1.5, '这是第三个商品', ["硬件设备"]),
    new Product(4, '第四个商品', 5.99, 3.5, '这是第四个商品', ['电子产品', '硬件设备']),
    new Product(5, '第五个商品', 6.99, 2.5, '这是第五个商品', ['电子产品']),
    new Product(6, '第六个商品', 2.99, 3.5, '这是第六个商品', ['图书']),
];
var comments = [
    new Comment(1, 1, "2017-02-02 22:22:32", "张三", 3, "东西不错"),
    new Comment(2, 1, "2017-02-01 22:52:22", "张四", 2, "东西不错的地方分"),
    new Comment(3, 1, "2017-03-02 12:22:22", "张六", 3, "东西放到不错地方"),
    new Comment(4, 2, "2017-01-02 22:27:22", "张三", 3, "东西放到 不错"),
];
//websocket
var wsServer = new ws_1.Server({ port: 8085 });
wsServer.on("connection", function (websocket) {
    websocket.send("这是消息是服务器主动推送");
});
