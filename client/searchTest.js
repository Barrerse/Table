var request = require('request');

// see if we can call this from the backend (server side)

function makeRequest (q) {
    
    request({ url: `https://api.boardgameatlas.com/api/search?name=${q}&client_id=rYefHsAVYG` } , function(err, res, jsonString) {
        var json = JSON.parse(jsonString);
        var gameNameList = json.games.map(e => e.name);
        console.log(gameNameList);
    
        var gameImageList = json.games.map(e => e.image_url);
        console.log(gameImageList);
    });
}
