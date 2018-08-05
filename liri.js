



require("dotenv").config();
var keys = require("./keys.js");
var twitterKeysFile = require("./keys.js");
var fs = require("fs");
var file = "./random.txt"

var request = require("request");
var twitter = require("twitter");
var spotify = require("node-spotify-api");
var searchType = process.argv[2];
var searchSlice = process.argv.slice(3);

var term = searchSlice.join(" ");

if (searchType == "movie-this") {

request("http://www.omdbapi.com/?t="+term+"&y=&plot=short&apikey=trilogy", function(error, response, body) {if (!error && response.statusCode === 200) {
    var movie = JSON.parse(body);
    console.log(body);
    console.log(movie.Title);
    console.log(movie.Year);
    console.log(movie.imdbRating);
    console.log(movie.Ratings[1]);
    console.log(movie.Country);
    console.log(movie.Language);
    console.log(movie.Plot);
    console.log(movie.Actors);
}})}
else 
  request("http://www.omdbapi.com/?t=Mr. Nobody&y=&plot=short&apikey=trilogy", function(error, response, body) {if (!error && response.statusCode === 200) {
    var movie = JSON.parse(body);
    console.log(term);
    console.log(movie);
    console.log(movie.Title);
    console.log(movie.Year);
    console.log(movie.imdbRating);
    console.log(movie.Ratings[1]);
    console.log(movie.Country);
    console.log(movie.Language);
    console.log(movie.Plot);
    console.log(movie.Actors);
}});
// if (searchType == "my-twitter") {
// function myTweets() {
//   var client = new Twitter({
//     consumer_key: keys.twitterKeys.consumer_key,
//     consumer_secret: keys.twitterKeys.consumer_secret,
//     access_token_key: keys.twitterKeys.access_token_key,
//     access_token_secret: keys.twitterKeys.access_token_secret, 
//   });
//   var twitterUsername = process.argv[3];
//   if(!twitterUsername){
//     twitterUsername = "'devUserAPI";
//   }
//   params = {screen_name: twitterUsername};
//   client.get("statuses/user_timeline/", params, function(error, data, response){
//     if (!error) {
//       for(var i = 0; i < data.length; i++) {
//         //console.log(response); // Show the full response in the terminal
//         var twitterResults = 
//         "@" + data[i].user.screen_name + ": " + 
//         data[i].text + "\r\n" + 
//         data[i].created_at + "\r\n" + 
//         "------------------------------ " + i + " ------------------------------" + "\r\n";
//         console.log(twitterResults);
//         log(twitterResults); // calling log function
//       }
//     }  else {
//       console.log("Error :"+ error);
//       return;
//     }
//   });
// }
// };

// Spotify API
if (searchType == "spotify-this-song") {
  
  console.log(spotify);
  
  request("https://accounts.spotify.com/authorize/?client_id="+spotify+"&response_type=q="+term, function(error, response, body) {
    console.log(body);
  });
};
  
