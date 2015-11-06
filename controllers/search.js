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




module.exports = router;