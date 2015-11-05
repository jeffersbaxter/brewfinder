var express = require("express");
var db = require('./../models');
var request = require("request");
var router = express.Router();

router.get("/", function(req,res){
	db.user.findById(req.session.user).then(function(user){
		user.getLikes().then(function(likes){
			res.render("likes/index", {likes: likes});
		});
	});
});

router.post("/", function(req,res){
	db.like.findOrCreate({
		where: {
			name: req.body.name,
		},
		defaults: {
			apiId: req.body.apiId
		}
	}).spread(function(like, created){
		db.user.findById(req.session.user).then(function(user){
			user.addLike(like).then(function(){
				res.redirect("/likes")
			})
		})
	})
});





module.exports = router;