var express = require('express');
var open = require('open');
var bodyParser = require("body-parser");
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/signupdb", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var db = mongoose.connection;
db.on('error', console.log.bind(console, "Connection error"));
db.once('open', function (callback) {
    console.log("Connection succeeded");
})
var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/signup', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var event = req.body.event;
    var group = req.body.group;
    var time = req.body.time;
    var work = req.body.work;

    var data = {
        "name": name,
        "email": email,
        "phone": phone,
        "event": event,
        "group": group,
        "time": time,
        "work": work
    }
    db.collection('details').insertOne(data, function (err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");
    });
    return res.redirect('signup_success');
})

app.get('/', function (req, res) {
    res.set({
        'Access-control-Allow-Origin': '*'
    });
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

app.get('/signup_success', function (req, res) {
    res.sendFile(__dirname + "/signup_success.html");
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

app.get('/images/background.gif', function (req, res) {
    res.sendFile(__dirname + "/images/background.gif");
});

app.get('/images/background.png', function (req, res) {
    res.sendFile(__dirname + "/images/background.png");
});

app.get('/images/blog2_image1.jpg', function (req, res) {
    res.sendFile(__dirname + "/images/blog2_image1.jpg");
});

app.get('/images/content_back.png', function (req, res) {
    res.sendFile(__dirname + "/images/content_back.png");
});

app.get('/images/favicon.png', function (req, res) {
    res.sendFile(__dirname + "/images/favicon.png");
});

app.get('/images/footer.png', function (req, res) {
    res.sendFile(__dirname + "/images/footer.png");
});

app.get('/images/image1.jpg', function (req, res) {
    res.sendFile(__dirname + "/images/image1.jpg");
});

app.get('/images/image2.jpg', function (req, res) {
    res.sendFile(__dirname + "/images/image2.jpg");
});

app.get('/images/image3.jpg', function (req, res) {
    res.sendFile(__dirname + "/images/image3.jpg");
});

app.get('/images/image4.jpg', function (req, res) {
    res.sendFile(__dirname + "/images/image4.jpg");
});

app.get('/images/tab.png', function (req, res) {
    res.sendFile(__dirname + "/images/tab.png");
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
    open('http://localhost:3000');
});