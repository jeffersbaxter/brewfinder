var express = require('express');
var db = require('../models');
var passport = require('passport');
var request = require('request');
var router = express.Router();
var logout = require('express-passport-logout');


router.get('/signUp', function(req,res){
	res.render('auth/signUp');
});

router.post('/signUp', function(req,res){
	if (req.body.password) {
		db.user.findOrCreate({
			where: {email: req.body.email},
			defaults: {
				password: req.body.password,
				name: req.body.name
			}
		}).spread(function(user, created){
			if (created) {
				req.login(user, function(err) {
					console.log("hello", user)
					if (err) throw err;
					req.session.user = user.id;
					req.flash('success', 'Welcome!');
					res.redirect('/search');
				});
			} else {
				console.log("oh no!")
				req.flash('warning', 'User already exists');
				res.redirect('auth/signUp');
			}
		}).catch(function(err){
			req.flash('warning', err.message);
			res.redirect('/auth/signUp');
			console.log(err);
		});
	}
});

router.route('/signIn')
	.get(function(req,res){
		res.render('auth/signIn');
	})
	.post(function(req,res){
		passport.authenticate('local', function(err, user, info){
			if (user) {
				req.login(user, function(err) {
					if (err) throw err;
					req.session.user = user.id;
					res.redirect('/search');
					console.log(err);
				});
			} else {
				req.flash('danger', 'An error ocurred');
				res.redirect('/auth/signIn');
			}
		})(req,res);
	});


router.get('/signOut', function(req,res){
	req.logout();
	res.redirect("/");
});



module.exports = router;