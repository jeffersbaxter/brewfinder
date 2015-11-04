var express = require("express");
var db = require('./../models');
var request = require("request");
var router = express.Router();

var searchUrl = "http://api.brewerydb.com/v2/search?";
var idURL = "http://api.brewerydb.com/v2/beer/";


router.get('/', function(req,res){
	var query = req.query.q;
	// var type = req.query.type;
	request(searchUrl+"q="+query+"&type=beer&key="+process.env.API_KEY, function(err, response, body){
	// request(searchUrl+"q="+query+"&key="+process.env.API_KEY, function(err, response, body){
		var data = JSON.parse(body);
		res.render('results/index', {products: data.data, q: query});
		// if (data.data) {
		// 	res.render('results/index', {products: data.data});
		// } else {
		// 	res.render('error');
		// }
	});
});

router.get("/:id", function(req,res){
	var query = req.query.q;
	var id = req.params.id;
	request(idURL+id+"?key="+process.env.API_KEY, function(err, response, body){
		res.render('results/display', {product: JSON.parse(body), q: query});
	});
});

module.exports = router;