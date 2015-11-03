var express = require("express");
var db = require('./../models');
var request = require("request");
var router = express.Router();

var searchUrl = "http://api.brewerydb.com/v2/search?";


router.get('/', function(req,res){
	var query = req.query.q;
	// var type = req.query.type;
	console.log(process.env.API_KEY)
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

module.exports = router;