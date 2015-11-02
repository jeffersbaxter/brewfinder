var express = require("express");
var db = require('./../models');
var request = require("request");
var router = express.Router();

router.get('/', function(req,res){
	request("http://api.brewerydb.com/v2/?key")
})

module.exports = router;