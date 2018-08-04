// var request = require("dotenv").config();

// var spotify = new spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

var request = require("request");

var movieName = "'"+process.argv[2]+"'";

request("http://www.omdbapi.com/?t="+movieName+"&y=&plot=short&apikey=trilogy", function(error, response, body) {if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
  }
});

// var request = require("request");
// var 
