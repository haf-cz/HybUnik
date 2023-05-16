var express = require('express');
var player = require('play-sound')(opts = {})

var app = express();

const port = 8000;
// ToDo: storing sounds e.g. in some folder stored delative to this file...
const sound1 = "c:\\Windows\\Media\\Alarm02.wav";

app.get('/', function (req, res) {
   res.send('Hello World'); // ToDo: REMOVE - for testing only
   player.play(sound1, function(err){
      if (err) throw err;
    });
})

var server = app.listen(port, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("App listening at http://%s:%s", host, port);
});

// endpoint OK
app.get("/ok", (req, res, next) => {
   console.log("znaji heslo!!!");
   // ToDo: mozna by slo delat validaci tady, ale neprehnat to s volanima od klienta... mrk mrk
   notifyOK();
  });

// test pro kontrolu spojeni
app.get("/test", (req, res, next) => {
   console.log("test OK");
   res.json("Trololo odpoved mas, tak to asi funguje...");
});

function notifyOK() {
   console.log("notifyOK called");
   player.play(sound1, function(err){
      if (err) {
         console.log(err);
      } 
    });
}