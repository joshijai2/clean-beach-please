var express = require('express');
var open = require('open');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get('/style.css', function (req, res) {
    res.sendFile(__dirname + "/style.css");
});

app.get('/about', function (req, res) {
    res.sendFile(__dirname + "/about.html");
})

app.get('/about#emailus', function (req, res) {
    res.sendFile(__dirname + "/about.html#emailus");
})

app.get('/about#contact', function (req, res) {
    res.sendFile(__dirname + "/about.html#contact");
})

app.get('/blog', function (req, res) {
    res.sendFile(__dirname + "/blog.html");
});

app.get('/blog2', function (req, res) {
    res.sendFile(__dirname + "/blog2.html");
});

app.get('/blog1', function (req, res) {
    res.sendFile(__dirname + "/blog1.html");
});

app.get('/events', function (req, res) {
    res.sendFile(__dirname + "/events.html");
});

app.get('/getinvolved', function (req, res) {
    res.sendFile(__dirname + "/getinvolved.html");
});

app.get('/payment', function (req, res) {
    res.sendFile(__dirname + "/payment.html");
});

app.get('/getinvolved#signup', function (req, res) {
    res.sendFile(__dirname + "/getinvolved.html#signup");
});

app.get('/getinvolved#donate', function (req, res) {
    res.sendFile(__dirname + "/getinvolved.html#donate");
});

app.get('/images/background.gif', function(req, res){
    res.sendFile(__dirname + "/images/background.gif");
});

app.get('/images/background.png', function(req, res){
    res.sendFile(__dirname + "/images/background.png");
});

app.get('/images/blog2_image1.jpg', function(req, res){
    res.sendFile(__dirname + "/images/blog2_image1.jpg");
});

app.get('/images/content_back.png', function(req, res){
    res.sendFile(__dirname + "/images/content_back.png");
});

app.get('/images/favicon.png', function(req, res){
    res.sendFile(__dirname + "/images/favicon.png");
});

app.get('/images/footer.png', function(req, res){
    res.sendFile(__dirname + "/images/footer.png");
});

app.get('/images/image1.jpg', function(req, res){
    res.sendFile(__dirname + "/images/image1.jpg");
});

app.get('/images/image2.jpg', function(req, res){
    res.sendFile(__dirname + "/images/image2.jpg");
});

app.get('/images/image3.jpg', function(req, res){
    res.sendFile(__dirname + "/images/image3.jpg");
});

app.get('/images/image4.jpg', function(req, res){
    res.sendFile(__dirname + "/images/image4.jpg");
});

app.get('/images/tab.png', function(req, res){
    res.sendFile(__dirname + "/images/tab.png");
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
    open('http://localhost:3000');
});