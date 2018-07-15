var request = require('request');

// Enter your reddit.app.link in this variable.
var urlToExpand = "your_url_here";

var options = {
  url: urlToExpand,
  headers: {
    'User-Agent': 'Chrome/44.0.2403.157'
  }
};

function callback(error, response, body) {
	// Save the response as a string in a variable.
	var rawResponse = JSON.stringify(body);
	// Search for "/comments/" in the string, it will return a position.
	var commentsLocation = rawResponse.search("/comments/");
	// Use this position value to go from the start of "/comments/" until
	// 7 positions later, so "/comments/123456/"; that's your post ID.
	var postId = rawResponse.substring(commentsLocation, commentsLocation+17);
	// Add the post ID that we just found after the default reddit URL.
	var expandedLink = "https://www.reddit.com" + postId;
	// Variable outputs. "expandedLink" is the variable what you want.
	console.log("Input: " + urlToExpand)
	console.log("Output: " + expandedLink);
}

request(options, callback);