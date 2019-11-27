// 指定ユーザーのツイートを取得する。
// 定数paramのパラメータを変更することで、対象とするユーザーと取得するツイート数を指定できる。
// 今回は@tasowebというユーザーのツイートを20個取得し、結果はtimeline.jsonに格納する。

const twitter = require("twitter");
const fs = require("fs");

let username = 'shimakaze_soft';
const params = {
    screen_name: username,
    count: 20
};

console.log("@" + params.screen_name);

const client = new twitter(
    JSON.parse(fs.readFileSync("secret.json","utf-8"))
);
client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
        // console.log(tweets);
        fs.appendFileSync("timeline.json",JSON.stringify(tweets) + "\n","utf-8");
    }
});


// const obj = JSON.parse(
//     fs.readFileSync("timeline.json","utf-8")
// );

// console.log(obj);
// for(let i=0;i<20;i++){
// //     // console.log("\n");
//     console.log(obj[i].text + "\n");
// }
