var localStrategy = require('passport-local').Strategy;
var passport = require('passport');
var db = require('../models');

module.exports = {
	localStrategy: new localStrategy({
		usernameField: 'email'
	},
	function(email, password, done) {
		db.user.find({where: {email: email}}).then(function(user){ 
			if (user) {
				user.checkPassword(password, function(err, result){
					if (err) return done(err);
					if (result) {
						done(null, user.get());
					} else {
						done(null, false, {message: 'Sorry, that password doesn\'t work.'});
					}
				});
			} else {
				done(null, false, {message: 'Unknown user'});
			}
		});
	}),
	serializeUser: function(user, done) {
		done(null, user.id);
	},
	deserializeUser: function(id, done) {
		db.user.findById(id).then(function(user) {
			done(null, user.get());
		}).catch(done);
	}
}