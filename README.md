# reddit_app_unlink.js
A simple Node.js "reddit.app.link" URL expander to get the original URL for Reddit app-generated links.

## How to use
- `npm install request`
- Place your app link in the variable
- nodejs reddit_app_unlink.js

## Discord.js integration
You can obviously use this with Discord.js.
Adapt the following with the actual script:
(You can also add failsafes, such as searching for only the link in the message, etc.)

```
	if(message.content.startsWith("https://reddit.app.link/")) { 
		var urlToExpand = message.content;

		var options = {
		  url: urlToExpand,
		  ...
		};

		function callback(error, response, body) {
			...
			message.reply(actualLink);
		}
		request(options, callback);
	}
```