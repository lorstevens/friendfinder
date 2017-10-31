
	var friends = require("../data/friends.js");
	var bodyParser = require('body-parser');
	var path = require('path');


	module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	app.post("/api/friends", function(req, res) {
		var newFriend = req.body 
		console.log(newFriend);
		friends.push(newFriend);
		res.json(newFriend);


		var newFriendScores = req.body.scores;
		console.log(newFriendScores)

		for (var i = 0; i <friends.length; i++){
			console.log(friends[i].scores);
		}

		//looping through the scores in 
	// 	friends.forEach(myFunction);

	// 	function myFunction (item, index) {
	// 	for (var scores in item) {
 //    		console.log(item[scores])
 //    		} 			
	// }

		// for (i > 0; i = newFriend.length; i++) {
		// 	if (newFriend[i] === friends
		// }

	});

};