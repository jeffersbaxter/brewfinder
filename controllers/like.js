var express = require("express");
var db = require('./../models');
var request = require("request");
var router = express.Router();

router.get("/", function(req,res){
	res.render("likes/index");
});

module.exports = router;