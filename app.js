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
    res.render("index");
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
    open('http://localhost:3000');
});