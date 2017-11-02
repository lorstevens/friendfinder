var friends = require("../data/friends");
var comparison = [];
var countTotal = [];

//routing
module.exports = function(app) {


	//api for displaying friends data
	app.get("/api/friends", function(req,res){
		res.json(friends);
	});

	app.post("/api/friends", function(req, res){

		var newFriend = req.body // This is new friend

		console.log(newFriend);

		var newFriendScore = req.body.scores; //This is the new friend scores

		console.log(newFriendScore);


		for (var i=0; i<friends.length; i++) {
			console.log(friends[i].scores)

			var allFriendsScores= friends[i].scores;

			countTotal[i] = 0;

			for (var j=0; j<10; j++) {
				countTotal[i] += Math.abs(newFriendScore[j]-allFriendsScores[j]);
				console.log(countTotal[i]);
			};
		};

	
		var bestMatch = countTotal.indexOf(Math.min.apply(Math, countTotal)); //index of the the smallest number
// console.log(bestMatch);	

	
		res.json(friends[bestMatch]);

		//add data to data array
		friends.push(req.body);
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

