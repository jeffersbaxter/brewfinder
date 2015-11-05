var express = require('express');
var ejsLayouts = require("express-ejs-layouts");
var request = require("request");
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var strategies = require('./config/strategies');
var db = require('./models');
var assert = require('assert');
var env = require('node-env-file');
var app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use('/static', express.static(__dirname + '/static'));
app.use(ejsLayouts);
app.use(flash());

app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(strategies.serializeUser);
passport.deserializeUser(strategies.deserializeUser);

passport.use(strategies.localStrategy);


app.set("view engine", "ejs");

app.use(function(req,res,next){
	if (req.session.user) {
		db.user.findById(req.session.user).then(function(user){
			req.currentUser = user;
			next();
		});
	} else {
		req.currentUser = false;
		next();
	}
});

app.use(function(req,res,next){
	res.locals.currentUser = req.currentUser;
	res.locals.alerts = req.flash();
	next();
});

app.get("/", function(req,res){
	res.render("index");
});

app.use("/results", require("./controllers/result"));
app.use('/auth', require('./controllers/auth'));
app.use('/search', require('./controllers/search'));
app.use("/likes", require("./controllers/like"));


app.listen(process.env.PORT || 3000);