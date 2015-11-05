var db = require('./models');

// db.like.findAll().then(function(like){
// 	db.like.create({
// 		apiId: 'sdfrfs',
// 		name: 'Busch',
// 		userId: 1
// 	}).then(function(like){
// 		console.log(like.get());
// 	})
// });

// db.like.findOrCreate({
// 	where: {
// 		apiId: 'dfewff',	
// 	},
// 	defaults: {
// 		name: 'Guinness',
// 		userId: 3
// 	}
// }).spread(function(like, created){
// 	db.like.findAll({
// 		where: {
// 			userId: 3
// 		}
// 	}).then(function(likes) {
// 		console.log(likes)
// 	});
// });

db.user.findOne().then(function(user){
	user.createLike({
		name: 'Redhook',
		apiId: 'sdfsdf'
	}).then(function(like){
		console.log(like.get());
	});
});