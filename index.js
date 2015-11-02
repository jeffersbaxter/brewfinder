var express = require('express');
var app = express();
var ejsLayouts = require("express-ejs-layouts");
var request = require("request");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(ejsLayouts);
app.set("view engine", "ejs");

app.get("/", function(req,res){
	res.render("index");
});

app.use("/results", require("./controllers/result"));

app.listen(3000);