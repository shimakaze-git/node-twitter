# node-twitter
nodejsによるtwitterの情報取集ツール


## Sample Source Code

```javascript: tweet.js
# Tweetを行う.

const twitter = require("twitter");
const fs = require("fs");

const client = new twitter(JSON.parse(fs.readFileSync("secret.json","utf-8")));
client.post('statuses/update', {status: 'ツイートしたい内容'}, function(error, tweet, response){
    if (!error) {
      console.log(tweet);
    } else {
      console.log('error');
    }
});

```

参考資料

- [Node.jsでTwitter APIを叩いた話(2018年版)](https://tasoweb.hatenablog.com/entry/2018/06/01/002438)

- [Node.jsでのTwitter APIの基本的な使い方](https://libre-mode.com/tech/practice/node-twitterapi.html)

