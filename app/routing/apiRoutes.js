
var friends = require("../data/friends.js");
var bodyParser = require('body-parser');
var path = require('path');


module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	app.post("/api/friends", function(req, res) {
		
		var newFriend = req.body // This is every friend

		console.log(newFriend);

		var newFriendScores = req.body.scores // This is the user friend

		console.log(newFriendScores);


		var bestMatch = {
			name: "",
			photo: "",
			matchDifference: 1000
		};

// var difference = 0


for (var i = 0; i < friends.length; i ++){
	var difference = 0;
	for (var j = 0; j < newFriendScores.length; j++){
		difference += Math.abs(friends[i].scores[j] - newFriendScores[j]);
	}

	if (difference < bestMatch.matchDifference){
		bestMatch.matchDifference = difference;
		bestMatch.name = friends[i].name;
		bestMatch.photo = friends[i].photo;
	}
	console.log(difference);
	console.log(bestMatch.name);

}

friends.push(newFriend);
res.json(bestMatch);

});

};



//================================
//Was trying to find total of new user array + total of friends array. couldn't get the sum of the new user array. 


// This finds the total score of the newly created friend
	// for (var i = 0; i < newFriend.length; i++){
	// 	newUserTotal = 0;
	// 	for (var j = 0; newFriend[i].newFriendScores[j]; j++){
	// 		total += parseInt(newFriend[i].newFriendScores[j]);
	// 	}
	// 	console.log(newUserTotal)

	// }

// for (var i = 0; i < newFriend.length; i++){
// 	userTotal = 0;
// 	for (var j= 0; newFriend[i].scores[j]; j++) {
// 		userTotal += parseInt(newFriend[i].scores[j]);
// 	}
// 	console.log(userTotal)

// }


// //This finds the total score for each already existing friend

// 	for (var i = 0; i < friends.length; i++){
// 		friendTotal = 0;
// 		for (var j = 0; friends[i].scores[j]; j++){
// 			friendTotal += parseInt(friends[i].scores[j]);
// 			if (total === friendTotal){
// 				bestMatch.name = friends[i].name; 
// 				bestMatch.photo = friends[i].photo;
// 			}
// 		}
// 		console.log(friendTotal)

// 	}

