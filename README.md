# reddit_app_unlink.js
A simple Node.js "reddit.app.link" URL expander to get the original URL for Reddit app-generated links.

## How to use
- Open the terminal
- Install the Request module with `npm install request`
- Place your reddit.app.link in the `urlToExpand` variable, save.
- In the terminal, run it with `nodejs reddit_app_unlink.js`

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