var express = require('express');
var db = require('../models');
var request = require("request");
var router = express.Router();

router.get("/index", function(req,res){
	if (!req.user) {
		res.redirect('/');
	} else {
		res.render("search/index");
	}
});


module.exports = router;