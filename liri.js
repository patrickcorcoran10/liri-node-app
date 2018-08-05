// var request = require("dotenv").config();



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
    console.log(twitter);
    console.log(body);
    console.log(movie.Title);
    console.log(movie.Year);
    console.log(movie.imdbRating);
    console.log(movie.Rating);
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
    console.log(movie.Ratings.Source[1].Value);
    console.log(movie.Country);
    console.log(movie.Language);
    console.log(movie.Plot);
    console.log(movie.Actors);
}});


// if (searchType == "my-tweets") {
//   var client = new Twitter(keys.twitter);
//   param = {screen_name: devUserAP};
//   var count = 0;
//   twitter.stream(function(stream) {
//     stream.on("data", function(data) {
//       console.log(param.data);
//     })
//   });
// };
  
  
  // request("https://api.twitter.com/1.1/search/tweets.json&&q=@devUserAPI&count=20", function(error, response, body) {if (!error && response.statusCode === 200) {
  //   console.log(body);
// });}

if (searchType == "spotify-this-song") {
  // var spotify = new Spotify(keys.spotify);
  console.log(spotify);
  
  request("https://accounts.spotify.com/authorize/?client_id="+spotify+"&response_type=q="+term, function(error, response, body) {
    console.log(body);
  });
};
  
  // request("https://api.spotify.com/v1/search&=Authorization:Bearer"+process.env.SPOTIFY_SECRET+"&q="+term, function(error, response, body) {if (!error && response.statusCode === 200) {
  // .then(function(data) {
  //   console.log(data); 
  // })
  // };