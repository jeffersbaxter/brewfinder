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

router.get("/:id", function(req,res){
	var id = req.params.id;
	console.log(id);
	db.like.findById(req.params.id).then(function(like){
		res.render("likes/show", {like: like});
	})
});

router.delete("/:id", function(req,res){
	db.like.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(){
		res.send({'msg': 'success'});
	}).catch(function(e){
		res.send({'msg': 'error', 'error': e});
	});
})





module.exports = router;