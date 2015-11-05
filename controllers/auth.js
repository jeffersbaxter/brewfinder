var express = require('express');
var db = require('../models');
var passport = require('passport');
var request = require('request');
var router = express.Router();
var logout = require('express-passport-logout');


router.route('/signIn')
	.get(function(req,res){
		res.render('auth/signIn');
	})
	.post(function(req,res){
		passport.authenticate('local', function(err, user, info){
			if (user.id > 0 || user.id != false) {
				req.login(user, function(err) {
					if (err) throw err;
					req.session.user = user.id;
					req.flash('success', 'Thank you for logging in.');
					res.redirect('/search/index');
					console.log(err);
				});
			} else {
				req.flash('warning', 'An error ocurred');
				// res.redirect('/auth/signIn');
				res.render('auth/signIn');
			}
		})(req,res);
	});

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
			if (created === true) {
				req.login(user, function(err) {
					if (err) throw err;
					req.flash('success', 'Welcome!');
					res.redirect('/search/index');
				});
			} else {
				req.flash('warning', 'User already exists');
				res.redirect('auth/signUp');
				console.log('wrong way');
			}
		}).catch(function(err){
			req.flash('warning', err.message);
			res.redirect('/auth/signUp');
			console.log(err);
		});
	}
});

router.get('/signOut', function(req,res){
	req.logout();
	res.redirect("/");
});



module.exports = router;