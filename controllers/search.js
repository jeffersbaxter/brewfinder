var express = require('express');
var db = require('../models');
var request = require("request");
var router = express.Router();

var searchUrl = "api.brewerydb.com/v2/search?";

router.get("/index", function(req,res){
	if (!req.session.user) {
		res.redirect('/');
	} else {
		res.render("search/index");
	}
});

router.get("/index", function(req,res){
	var query = req.params.q;
	request(searchUrl+"q="+query+"key="+process.env.API_KEY, function(err, response, body){
		var data = JSON.parse(body);
		res.send(data);
		// if (data.data) {
		// 	res.redirect('/results', {products: data.data});
		// } else {
		// 	res.render('error');
		// }
	});
});


module.exports = router;