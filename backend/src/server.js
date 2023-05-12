var express = require('express');
var player = require('play-sound')(opts = {})

var app = express();

const port = 8000;
const sound1 = "../sounds/Alarm02.wav"; // ToDo: storing sounds...

app.get('/', function (req, res) {
   res.send('Hello World');
   player.play(sound1, function(err){
      if (err) throw err;
    });
})

var server = app.listen(port, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("App listening at http://%s:%s", host, port);
});