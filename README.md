# reddit_app_unlink.js
A simple Node.js "reddit.app.link" URL expander to get the original URL for Reddit app-generated links.

It's not the best way of doing things, but it works. This is an alternative, and it might break at any time.
Usually, you would want to use something that doesn't follow redirects which returns you to a Temporary Redirect with the actual link being in the "location" part of a header.


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